import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailCommentsSchema } from "pages/ArticlesDetailsPage";
import { fetchArticleCommentById } from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state?.articlesDetailComments || commentAdapter.getInitialState(),
);

const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailComments',
    initialState: commentAdapter.getInitialState<ArticleDetailCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleCommentById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleCommentById.fulfilled, (
                state,
                action: PayloadAction<CommentType[]>,
            ) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleCommentById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailCommentsSliceReducer } = articleDetailCommentsSlice;
