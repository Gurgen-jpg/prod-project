import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageListLimit } from "pages/ArticlesPage/model/selectors/getArticlesPageListLimit/getArticlesPageListLimit";
import { getArticleFilterSort } from "pages/ArticlesPage/model/selectors/getArticleFilterSort/getArticleFilterSort";
import { getArticleFilterOrder } from "pages/ArticlesPage/model/selectors/getArticleFilterOrder/getArticleFilterOrder";
import { getArticleFilterSearch } from "pages/ArticlesPage/model/selectors/getArticleFilterSearch/getArticleFilterSearch";
import { getArticlesPageListPageNum } from "pages/ArticlesPage/model/selectors/getArticlesPageListPageNum/getArticlesPageListPageNum";
import { addQueryParams } from "shared/lib/url/addQueryParams";
import { ArticleType } from "entities/Article/model/types/article";
import { getArticleFilterType } from "../../selectors/getArticleFilterType/getArticleFilterType";

interface FetchArticleListProps {
    replace?: boolean;
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
            const { replace } = props;
            const limit = getArticlesPageListLimit(getState());
            const sort = getArticleFilterSort(getState());
            const order = getArticleFilterOrder(getState());
            const search = getArticleFilterSearch(getState());
            const page = getArticlesPageListPageNum(getState());
            const type = getArticleFilterType(getState());

            try {
                addQueryParams({
                    sort,
                    order,
                    search,
                    type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
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
