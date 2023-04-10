import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { ArticleDetailRecommendationSchema } from "../type/ArticleDetailRecommendationSchema";
import { fetchArticleRecommendation } from "../services/fetchRecommendations/fetchRecommendations";

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getRecommendation = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state?.articleDetailPage?.recommendations || recommendationAdapter.getInitialState(),
);

const articleDetailRecommendationSlice = createSlice({
    name: 'articleDetailRecommendation',
    initialState: recommendationAdapter.getInitialState<ArticleDetailRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendation.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendation.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailRecommendationSliceReducer } = articleDetailRecommendationSlice;
