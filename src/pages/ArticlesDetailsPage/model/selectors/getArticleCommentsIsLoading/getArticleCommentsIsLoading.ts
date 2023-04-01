import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state?.articlesDetailComments?.isLoading;
};
