import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text } from "shared/ui";
import { TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import Views from 'shared/assets/icons/views.svg';
import Calendar from 'shared/assets/icons/calendar.svg';
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleCodeBlockComponent } from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slices/articleDetailSlice";
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({
    className,
    id,
}: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={style.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={style.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={style.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });
    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={style.avatar} width={200} height={200} border="50%" />
                <Skeleton className={style.title} width={100} height={24} />
                <Skeleton className={style.skeleton} width={300} height={24} />
                <Skeleton className={style.skeleton} width="100%" height={200} />
                <Skeleton className={style.skeleton} width="100%" height={200} />

            </div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Some error while loading article')}
            />
        );
    } else {
        content = (
            <>
                <div className={style.avatarWrapper}>
                    <Avatar size={200} src={data?.img} />
                </div>
                <Text title={data?.title} text={data?.subtitle} className={style.title} />
                <div className={style.articleInfo}>
                    <Icon Svg={Views} className={style.logo} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={style.articleInfo}>
                    <Icon Svg={Calendar} className={style.logo} />
                    <Text text={String(data?.createdAt)} />
                </div>
                {data?.blocks?.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(style.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
