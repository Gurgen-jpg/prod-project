import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text } from "shared/ui";
import { TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
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
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch]);

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
                <Avatar size={200} src={data?.img} alt={data?.title} className={style.avatar} />
                <Text title={data?.title} text={data?.subtitle} />

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
