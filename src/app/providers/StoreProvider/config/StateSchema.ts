import {
    AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailCommentsSchema } from "pages/ArticlesDetailsPage";
import { AddNewCommentSchema } from "features/addNewComment";
import { ArticlePageSchema } from "pages/ArticlesPage";
import { ScrollSaverSchema } from "features/scrollSaver";

export interface StateSchema {
    user: UserSchema;
    scrollSaver: ScrollSaverSchema;
    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articlesDetailComments?: ArticleDetailCommentsSchema;
    addNewComment?: AddNewCommentSchema;
    articlePage?: ArticlePageSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    dispatch?: Dispatch;
    state: StateSchema;
}
