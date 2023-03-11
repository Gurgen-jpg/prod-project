import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import HomePage from "./HomePage";

export default {
    title: 'Pages/HomePage',
    component: HomePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;
export const HomePageLight = Template.bind({});
HomePageLight.args = {};
HomePageLight.decorators = [DecoratorTheme(Theme.LIGHT)];

export const HomePageDark = Template.bind({});
HomePageDark.args = {};
HomePageDark.decorators = [DecoratorTheme(Theme.DARK)];
