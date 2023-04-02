import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routConfig/routConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];
        if (userData?.id) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }
        return sidebarItemsList;
    },
);
