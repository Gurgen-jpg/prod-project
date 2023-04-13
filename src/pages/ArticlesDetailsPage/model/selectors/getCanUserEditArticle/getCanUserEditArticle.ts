import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";

export const getCanUserEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }
        return user?.id === article?.user?.id;
    },
);
