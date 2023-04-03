import { memo } from "react";
import { Card } from "shared/ui/Card/Card";
import { classNames } from "shared/lib/classNames";
import { ArticleView } from "entities/Article";
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import style from './ArticleListItem.module.scss';

export interface ArticleListItemSkeletonProps {
    className?: string;
    articleView: ArticleView;
}

export const ArticleListItemSkeleton = memo(({
    className,
    articleView,
}: ArticleListItemSkeletonProps) => {
    if (articleView === ArticleView.BIG) {
        return (
            <Card className={classNames(style.ArticleListItem, {}, [className, style[articleView]])}>
                <div className={style.header}>
                    <Skeleton width={30} height={30} border="50%" className={style.avatar} />
                    <Skeleton width={130} height={16} className={style.username} />
                    <Skeleton width={80} height={16} className={style.createdAt} />
                </div>
                <Skeleton width={300} height={24} className={style.title} />
                <Skeleton width="100%" height={200} className={style.img} />
                <div className={style.footer}>
                    <Skeleton width={200} height={24} />
                    <Skeleton width={80} height={16} className={style.views} />
                </div>
            </Card>

        );
    }

    return (
        <div className={classNames(style.ArticleListItemSkeleton, {}, [className])}>
            <Card className={classNames(style.ArticleListItem, {}, [className, style[articleView]])}>
                <div className={style.card}>
                    <div className={style.wrapper}>
                        <Skeleton width={200} height={200} className={style.img} />
                    </div>
                    <div className={style.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={style.title} />
                </div>
            </Card>
        </div>
    );
});
