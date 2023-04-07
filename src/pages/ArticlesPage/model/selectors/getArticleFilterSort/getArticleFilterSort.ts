import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField } from "entities/Article/model/types/article";

export const getArticleFilterSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED_AT;
