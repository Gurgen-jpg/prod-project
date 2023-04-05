import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { ArticlePageSchema } from "pages/ArticlesPage";
import { fetchArticleList } from "pages/ArticlesPage/model/services/fetchArticleList";
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

const articleAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state?.articlePage || articleAdapter.getInitialState(),
);
export const articlePageSlice = createSlice({
    name: "articlePage",
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlePageSliceActions } = articlePageSlice;
export const { reducer: articlePageSliceReducer } = articlePageSlice;
