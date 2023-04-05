import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema) => {
    return state?.articlePage?.isLoading || false;
};
