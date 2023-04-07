import { memo } from "react";
import { classNames } from 'shared/lib/classNames';
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import style from './ArticleList.module.scss';

export interface ArticleListProps {
    className?: string;
    articles: Array<Article>;
    isLoading?: boolean;
    viewMode?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3).fill(0)
    .map((item, index) => (<ArticleListItemSkeleton articleView={view} key={index} />));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        isLoading,
        viewMode = ArticleView.SMALL,
        className,
        articles,
    } = props;
    const { t } = useTranslation();
    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} articleView={viewMode} key={article.id} />
    );

    if (isLoading) {
        return (
            <div className={classNames(style.ArticleList, {}, [className, style[viewMode]])}>
                {getSkeletons(viewMode)}
            </div>
        );
    }

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(style.ArticleList, {}, [className, style[viewMode]])}>
                <Text title={t('No articles')} />
            </div>
        );
    }
    return (
        <div className={classNames(style.ArticleList, {}, [className, style[viewMode]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
});
