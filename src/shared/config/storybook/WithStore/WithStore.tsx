import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUserName/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { userReducer } from "entities/User";
import { articleDetailsReducer } from "entities/Article/model/slices/articleDetailSlice";
import { articleDetailsPageReducer } from "pages/ArticlesDetailsPage/model/slice";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    user: userReducer,
    articleDetails: articleDetailsReducer,
    articleDetailPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
    );
};
