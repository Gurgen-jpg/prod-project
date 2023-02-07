import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import style from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}:NavbarProps) => {

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/home'}>Home</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};





