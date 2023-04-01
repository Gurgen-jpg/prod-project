import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentType } from "entities/Comment";

export const fetchArticleCommentById = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchArticleCommentById',
    async (articleId, thunkApi) => {
        const {
            rejectWithValue,
            extra,
        } = thunkApi;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            // const response = await extra.api.get<Profile>(`/profile`);
            const response = await extra.api.get<CommentType[]>(
                `/comments`,
                {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                },
            );

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
