import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from 'shared/config/routConfig/routConfig';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN}>{t('Home')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
