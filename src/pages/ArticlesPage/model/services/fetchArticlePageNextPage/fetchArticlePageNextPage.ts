import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlePageSliceActions } from "pages/ArticlesPage/model/slices/articlePageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { getArticlesPageListHasMore } from "../../selectors/getArticlesPageListHasMore/getArticlesPageListHasMore";
import { getArticlesPageListPageNum } from "../../selectors/getArticlesPageListPageNum/getArticlesPageListPageNum";
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';

export const fetchNextArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const {
                getState,
                dispatch,
            } = thunkApi;
            const hasMore = getArticlesPageListHasMore(getState());
            const page = getArticlesPageListPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageSliceActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
