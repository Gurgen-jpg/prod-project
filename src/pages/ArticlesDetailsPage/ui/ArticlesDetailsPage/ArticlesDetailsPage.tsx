import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleDetails } from "entities/Article";
import { AddNewComment } from "features/addNewComment";
import { Button, Text } from "shared/ui";
import { useSelector } from "react-redux";
import { CommentList } from "entities/Comment/ui/CommentList/CommentList";
import { ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routConfig/routConfig";
import { Page } from "widgets/Page";
import { TextSize } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage/model/slice";
import { getRecommendation } from "../../model/slice/articleDetailsRecommendationSlice";
import { getArticleRecommendationIsLoading } from "../../model/selectors/articleRecommendation/articleRecommendationSelectors";
import { fetchArticleRecommendation } from "../../model/services/fetchRecommendations/fetchRecommendations";
import { getArticleCommentsIsLoading } from "../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleCommentById } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import style from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailPage: articleDetailsPageReducer,
};

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getRecommendation.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationIsLoading);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchArticleCommentById(id));
        dispatch(fetchArticleRecommendation());
    });

    const sendNewArticleHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onGetBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
                {t('Article is not found')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(style.ArticlesDetailsPage, {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onGetBack}
                >
                    {t('Get back to articles')}
                </Button>
                <ArticleDetails id={id} />
                <Text size={TextSize.L} title={t('Recommendation')} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={style.recommendation}
                    target="_blank"
                />
                <Text
                    title={t('Comments')}
                    className={style.commentTitle}
                />
                <AddNewComment onSendNewComment={sendNewArticleHandler} />
                <CommentList comments={comments} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesDetailsPage);
