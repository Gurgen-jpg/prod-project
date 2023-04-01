import { EntityState } from "@reduxjs/toolkit";
import { CommentType } from "entities/Comment";

export interface ArticleDetailCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean;
    error?: string;
    // entities: Record<any, any>;
    // ids: string[];

}
