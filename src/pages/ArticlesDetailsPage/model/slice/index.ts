import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "pages/ArticlesDetailsPage";
import { articleDetailCommentsSliceReducer } from "./articleDetailsCommentsSlice";
import { articleDetailRecommendationSliceReducer } from "./articleDetailsRecommendationSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailCommentsSliceReducer,
    recommendations: articleDetailRecommendationSliceReducer,
});
