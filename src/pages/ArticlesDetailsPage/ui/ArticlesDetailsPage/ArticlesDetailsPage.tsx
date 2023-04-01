import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailCommentsSliceReducer, getArticleComments } from "pages/ArticlesDetailsPage/model/slice/articleDetailsCommentsSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleCommentById } from "pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { ArticleDetails } from "entities/Article";
import { AddNewComment } from "features/addNewComment";
import { Text } from "shared/ui";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "pages/ArticlesDetailsPage/model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading";
import { CommentList } from "entities/Comment/ui/CommentList/CommentList";
import style from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesDetailComments: articleDetailCommentsSliceReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        dispatch(fetchArticleCommentById(id));
    });

    const sendNewArticleHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
                {t('Article is not found')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={style.commentTitle} />
                <AddNewComment onSendNewComment={sendNewArticleHandler} />
                <CommentList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
