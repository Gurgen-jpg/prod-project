import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React from "react";
import { Button } from "shared/ui/Button/Button";
import style from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}
export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(style.PageError, {}, [className])}>
            <h1>{t('Something went wrong.')}</h1>
            <Button onClick={reloadPage}>
                {t('Reload')}
            </Button>
        </div>
    );
};
