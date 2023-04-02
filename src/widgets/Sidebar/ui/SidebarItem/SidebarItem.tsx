import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import style from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({
    item,
    collapsed,
}: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authonly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(style.icon, { [style.collapsed]: collapsed }, [])}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={style.icon} />
            <span className={style.link}>{t(item.title)}</span>
        </AppLink>

    );
};
