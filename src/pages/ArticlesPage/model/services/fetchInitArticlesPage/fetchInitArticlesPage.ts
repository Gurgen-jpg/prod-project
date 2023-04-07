import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { articlePageSliceActions } from "../../slices/articlePageSlice";
import { fetchArticlesList } from "../fetchArticleList/fetchArticleList";
import { getArticlePageInited } from "../../selectors/getArticlePageInited/getArticlePageInited";

export const fetchInitArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/fetchInitArticlesPage',
    (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as ArticleType;

        if (orderFromUrl) {
            dispatch(articlePageSliceActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlePageSliceActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlePageSliceActions.setSearch(searchFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlePageSliceActions.setType(typeFromUrl));
        }

        const inited = getArticlePageInited(getState());
        if (!inited) {
            dispatch(articlePageSliceActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
