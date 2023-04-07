import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { ArticlePageSchema } from "pages/ArticlesPage";
import { ARTICLE_VIEW_LOCAL_STORAGE_KEY } from "shared/const/localStorage";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

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
        page: 1,
        hasMore: true,
        _inited: false,
        search: '',
        order: 'asc',
        sort: ArticleSortField.CREATED_AT,
        limits: 9,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },

        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
            state.view = view;
            state.limits = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                articleAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length >= state.limits;

                if (action.meta.arg.replace) {
                    articleAdapter.setAll(state, action.payload);
                } else {
                    articleAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlePageSliceActions } = articlePageSlice;
export const { reducer: articlePageSliceReducer } = articlePageSlice;
