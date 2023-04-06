import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageListLimit = (state: StateSchema) => {
    return state?.articlePage?.limits;
};
