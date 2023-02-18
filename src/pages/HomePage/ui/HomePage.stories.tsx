import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import HomePage from "./HomePage";

export default {
    title: 'Pages/HomePage',
    component: HomePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;
export const HomePageLight = Template.bind({});
HomePageLight.args = {};
HomePageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const HomePageDark = Template.bind({});
HomePageDark.args = {};
HomePageDark.decorators = [ThemeDecorator(Theme.DARK)];
