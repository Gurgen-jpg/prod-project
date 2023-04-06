import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageListHasMore = (state: StateSchema) => {
    return state?.articlePage?.hasMore;
};
