import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView";
import { ArticleListTabs, ArticleView, ArticleViewSwitcher } from "entities/Article";
import { articlePageSliceActions } from "pages/ArticlesPage/model/slices/articlePageSlice";
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui';
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { getArticleFilterSort } from "pages/ArticlesPage/model/selectors/getArticleFilterSort/getArticleFilterSort";
import { getArticleFilterOrder } from "pages/ArticlesPage/model/selectors/getArticleFilterOrder/getArticleFilterOrder";
import { getArticleFilterSearch } from "pages/ArticlesPage/model/selectors/getArticleFilterSearch/getArticleFilterSearch";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { getArticleFilterType } from "pages/ArticlesPage/model/selectors/getArticleFilterType/getArticleFilterType";
import style from './ArticlePageFilter.module.scss';

export interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo(({ className }: ArticlePageFilterProps) => {
    const dispatch = useAppDispatch();
    const views = useSelector(getArticlesPageView);
    const sort = useSelector(getArticleFilterSort);
    const order = useSelector(getArticleFilterOrder);
    const search = useSelector(getArticleFilterSearch);
    const type = useSelector(getArticleFilterType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageSliceActions.setView(view));
        dispatch(articlePageSliceActions.setPage(1));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageSliceActions.setOrder(order));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch]);
    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageSliceActions.setSort(sort));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch]);
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageSliceActions.setSearch(search));
        dispatch(articlePageSliceActions.setPage(1));
        debounceFetchData();
    }, [dispatch]);
    const onChangeTab = useCallback((tab: ArticleType) => {
        dispatch(articlePageSliceActions.setType(tab));
        dispatch(articlePageSliceActions.setPage(1));
        debounceFetchData();
    }, [dispatch]);

    return (
        <div className={classNames(style.ArticlePageFilter, {}, [className])}>
            <div className={style.sortWrapper}>
                <ArticleSortSelector sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
                <ArticleViewSwitcher view={views} onViewClick={onChangeView} />
            </div>
            <ArticleListTabs value={type} onChange={onChangeTab} className={style.tabs} />
            <Card className={style.search}>
                <Input onChange={onChangeSearch} value={search} />
            </Card>
        </div>
    );
});
