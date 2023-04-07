import { StateSchema } from "app/providers/StoreProvider";

export const getArticleFilterOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
