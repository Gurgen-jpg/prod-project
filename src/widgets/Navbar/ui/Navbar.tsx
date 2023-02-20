import React from 'react';
import { classNames } from 'shared/lib/classNames/ui/classNames';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "shared/config/routConfig/routConfig";
import { PageLoader } from "widgets/PageLoader";
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div />
        </div>
    );
};
