import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import React from "react";
import { SidebarItemType } from "widgets/Sidebar/model/Items";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import style from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = ({ item, collapsed }:SidebarItemProps) => {
    const { t } = useTranslation();
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
