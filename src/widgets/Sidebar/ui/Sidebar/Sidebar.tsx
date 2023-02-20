import { classNames } from "shared/lib/classNames/ui/classNames";
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { AppRoutes } from "shared/config/routConfig/routConfig";
import { useTranslation } from "react-i18next";
import AboutIcon from '../../../../shared/assets/icons/about.svg';
import HomeIcon from '../../../../shared/assets/icons/home.svg';
import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onClickHandler = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    style.Sidebar,
                    { [style.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onClickHandler}
                className={style.SidebarToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XLARGE}
                square
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={style.links}>
                <AppLink
                    className={style.icon}
                    theme={AppLinkTheme.SECONDARY}
                    to={AppRoutes.MAIN}
                >
                    <HomeIcon />
                    <span className={style.link}>{t('Home')}</span>
                </AppLink>

                <AppLink
                    className={style.icon}
                    theme={AppLinkTheme.SECONDARY}
                    to={AppRoutes.ABOUT}
                >
                    <AboutIcon />
                    <span className={style.link}>{t('About')}</span>
                </AppLink>
            </div>
            <div className={
                classNames(style.switchers, { [style.collapsed]: collapsed }, [])
            }
            >
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={classNames(style.lang, { [style.lang_collapsed]: collapsed }, [])}
                />
            </div>
        </div>
    );
};
