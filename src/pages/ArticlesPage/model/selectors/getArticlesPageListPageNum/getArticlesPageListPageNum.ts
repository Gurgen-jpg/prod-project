import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageListPageNum = (state: StateSchema) => {
    return state?.articlePage?.page || 1;
};
