import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { ArticleView, ArticleViewSwitcher } from "entities/Article";
import { Page } from "shared/ui";
import { fetchNextArticlesPage } from "../../model/services/fetchArticlePageNextPage/fetchArticlePageNextPage";
import { getArticlesPageIsLoading } from "../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import style from './ArticlesPage.module.scss';
import { articlePageSliceActions, articlePageSliceReducer, getArticle } from "../../model/slices/articlePageSlice";
import { getArticlesPageView } from "../../model/selectors/getArticlesPageView/getArticlesPageView";
import { fetchInitArticlesPage } from "../../model/services/fetchInitArticlesPage/fetchInitArticlesPage";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageSliceReducer,
};
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const articlesList = useSelector(getArticle.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const views = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageSliceActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchInitArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(style.ArticlesPage, {}, [className])}>
                <ArticleViewSwitcher view={views} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    viewMode={views}
                    articles={articlesList}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
