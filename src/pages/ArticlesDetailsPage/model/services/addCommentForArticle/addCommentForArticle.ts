import { CommentType } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { ThunkConfig } from "app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticleCommentById } from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<any, string, ThunkConfig<string>>(
    'commentDetails/addCommentForArticle',
    // eslint-disable-next-line consistent-return
    async (text, thunkApi) => {
        const {
            rejectWithValue,
            extra,
            dispatch,
            getState,
        } = thunkApi;

        const auth = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());
        // const text = getAddNewCommentText(getState());

        if (!auth || !article?.id || !text) {
            return rejectWithValue("No auth data or article id");
        }

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                articleId: article.id,
                userId: auth.id,
                text,
            });

            if (!response.data) {
                return rejectWithValue("No response data");
            }

            // dispatch(addNewCommentActions.setNewComment(''));
            dispatch(fetchArticleCommentById(article.id));
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
