import { ArticleDetailCommentsSchema } from "./ArticleDetailCommentsSchema";
import { ArticleDetailRecommendationSchema } from "./ArticleDetailRecommendationSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailCommentsSchema;
    recommendations: ArticleDetailRecommendationSchema;
}
