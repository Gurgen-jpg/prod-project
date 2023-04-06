import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    // pagination
    view: ArticleView;
    page: number;
    limits?: number;
    hasMore: boolean;
}
