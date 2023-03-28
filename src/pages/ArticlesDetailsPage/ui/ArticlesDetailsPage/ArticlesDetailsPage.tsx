import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams();
    if (!id) {
        return (
            <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
                {t('Article is not found')}
            </div>
        );
    }
    return (
        <div className={classNames(style.ArticlesDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticlesDetailsPage);
