import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "entities/Article/model/types/article";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    // pagination
    view: ArticleView;
    page: number;
    limits?: number;
    hasMore: boolean;
    _inited: boolean;

    // filters
    order: SortOrder;
    search: string;
    sort: ArticleSortField;
}
