import { StateSchema } from "app/providers/StoreProvider";

export const getArticleFilterType = (state: StateSchema) => {
    return state.articlePage?.type;
};
