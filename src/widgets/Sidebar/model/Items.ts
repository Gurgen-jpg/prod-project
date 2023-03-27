import React from "react";
import { RoutePath } from "shared/config/routConfig/routConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export type SidebarItemType = {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authonly?: boolean;
}

export const SidebarItemsList:SidebarItemType[] = [
    {
        path: RoutePath.main,
        title: "Home",
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        title: "About",
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        title: "ProfilePage",
        Icon: ProfileIcon,
        authonly: true,
    },
    {
        path: RoutePath.articles,
        title: "Articles",
        Icon: ArticlesIcon,
        authonly: true,
    },
];
