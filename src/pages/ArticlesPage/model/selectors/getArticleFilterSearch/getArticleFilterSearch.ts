import { StateSchema } from "app/providers/StoreProvider";

export const getArticleFilterSearch = (state: StateSchema) => state.articlePage?.search ?? '';
