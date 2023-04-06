import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlePageSliceActions } from "../../slices/articlePageSlice";
import { fetchArticlesList } from "../fetchArticleList/fetchArticleList";
import { getArticlePageInited } from "../../selectors/getArticlePageInited/getArticlePageInited";

export const fetchInitArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchInitArticlesPage',
    (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;
        const inited = getArticlePageInited(getState());
        if (!inited) {
            dispatch(articlePageSliceActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
