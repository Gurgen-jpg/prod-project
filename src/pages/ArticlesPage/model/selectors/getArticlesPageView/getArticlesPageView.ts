import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageView = (state: StateSchema) => {
    return state?.articlePage?.view;
};
