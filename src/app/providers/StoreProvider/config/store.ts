import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { scrollSliceReducer } from "features/scrollSaver/slices/scrollSlice";
import { StateSchema } from "../config/StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollSaver: scrollSliceReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
