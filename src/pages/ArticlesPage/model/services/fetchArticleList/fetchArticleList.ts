import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageListLimit } from "pages/ArticlesPage/model/selectors/getArticlesPageListLimit/getArticlesPageListLimit";

interface FetchArticleListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;
            const { page = 1 } = props;
            const limit = getArticlesPageListLimit(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
