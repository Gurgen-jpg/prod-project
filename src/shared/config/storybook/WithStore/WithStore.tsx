import { Story } from "@storybook/react";
import { Provider as StoreProvider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider";

export const StoreDecorator = () => (StoryComponent: Story) => {
    const store = createReduxStore();
    return (
        <StoreProvider store={store}>
            <StoryComponent />
        </StoreProvider>
    );
};
