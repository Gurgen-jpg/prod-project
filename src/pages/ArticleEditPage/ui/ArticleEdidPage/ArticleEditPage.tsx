import { useTranslation } from 'react-i18next';
import { memo } from "react";
import { classNames } from "shared/lib/classNames";
import { useParams } from "react-router-dom";
import style from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const idEdit = Boolean(id);
    return (
        <div className={classNames(style.ArticleEditPage, {}, [className])}>
            {idEdit ? `${t('edit page with id')}: ${id}` : t('new article page')}
        </div>
    );
});
export default ArticleEditPage;
