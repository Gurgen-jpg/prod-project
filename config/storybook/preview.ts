import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { DecoratorTheme } from "../../src/shared/config/storybook/ThemeDecorator/DecoratorTheme";
// import { translationDecorator } from "../../src/shared/config/storybook/translationDecorator/translationDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(StyleDecorator);
// addDecorator(translationDecorator);
addDecorator(DecoratorTheme(Theme.LIGHT));
addDecorator(RouterDecorator);
