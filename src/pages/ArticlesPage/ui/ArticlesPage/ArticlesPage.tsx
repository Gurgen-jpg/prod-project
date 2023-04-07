import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "widgets/Page";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/getArticlesPageView/getArticlesPageView";
import { ArticlePageFilter } from "pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter";
import { useSearchParams } from "react-router-dom";
import { fetchNextArticlesPage } from "../../model/services/fetchArticlePageNextPage/fetchArticlePageNextPage";
import { getArticlesPageIsLoading } from "../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import style from './ArticlesPage.module.scss';
import { articlePageSliceReducer, getArticle } from "../../model/slices/articlePageSlice";
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
    const [searchParams] = useSearchParams();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchInitArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(style.ArticlesPage, {}, [className])}>
                <ArticlePageFilter />
                <ArticleList
                    isLoading={isLoading}
                    viewMode={views}
                    articles={articlesList}
                    className={style.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesPage);
