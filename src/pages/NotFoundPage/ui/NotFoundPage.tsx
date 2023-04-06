import { classNames } from "shared/lib/classNames/ui/classNames";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";
import style from './NodFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(style.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </Page>
    );
};
