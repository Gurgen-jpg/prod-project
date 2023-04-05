import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageError = (state: StateSchema) => {
    return state?.articlePage?.error;
};
