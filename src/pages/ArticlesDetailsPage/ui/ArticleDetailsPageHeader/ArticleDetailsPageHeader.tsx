import { useTranslation } from 'react-i18next';
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routConfig/routConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCanUserEditArticle } from "pages/ArticlesDetailsPage/model/selectors/getCanUserEditArticle/getCanUserEditArticle";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import style from './ArticleDetailsPageHeader.module.scss';

export interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanUserEditArticle);
    const article = useSelector(getArticleDetailsData);
    const onGetBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(style.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                className={style.BackButton}
                theme={ButtonTheme.OUTLINE}
                onClick={onGetBack}
            >
                {t('Get back to articles')}
            </Button>
            {canEdit && (
                <Button
                    className={style.editButton}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('edit')}
                </Button>
            )}
        </div>
    );
});
