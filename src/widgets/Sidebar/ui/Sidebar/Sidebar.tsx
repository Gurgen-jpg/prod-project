import { classNames } from "shared/lib/classNames/ui/classNames";
import React, { memo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SidebarItemsList } from "../../model/Items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onClickHandler = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])
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
                {SidebarItemsList.map((item) => {
                    return (
                        <SidebarItem
                            item={item}
                            key={item.path}
                            collapsed={collapsed}
                        />
                    );
                })}
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
});
