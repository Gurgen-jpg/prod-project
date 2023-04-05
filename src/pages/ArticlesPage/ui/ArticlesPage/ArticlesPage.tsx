import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { ArticleView, ArticleViewSwitcher } from "entities/Article";
import { fetchArticleList } from "../../model/services/fetchArticleList";
import { getArticlesPageIsLoading } from "../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageError } from "../../model/selectors/getArticlesPageError/getArticlesPageError";
import style from './ArticlesPage.module.scss';
import { articlePageSliceActions, articlePageSliceReducer, getArticle } from "../../model/slices/articlePageSlice";
import { getArticlesPageView } from "../../model/selectors/getArticlesPageView/getArticlesPageView";

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
    const error = useSelector(getArticlesPageError);
    const dispatch = useAppDispatch();
    useInitialEffect(() => {
        dispatch(fetchArticleList());
        dispatch(articlePageSliceActions.initState());
    });

    const onClickView = useCallback((newView: ArticleView) => {
        dispatch(articlePageSliceActions.setView(newView));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(style.ArticlesPage, {}, [className])}>
                <ArticleViewSwitcher view={views} onViewClick={onClickView} />
                <ArticleList
                    isLoading={isLoading}
                    viewMode={views}
                    articles={articlesList}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
