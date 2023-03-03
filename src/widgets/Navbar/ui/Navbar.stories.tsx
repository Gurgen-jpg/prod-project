import { Sidebar } from "widgets/Sidebar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { StoreDecorator } from "shared/config/storybook/WithStore/WithStore";
import { Navbar } from "./Navbar";

export default {
    title: 'Widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [DecoratorTheme(Theme.LIGHT), StoreDecorator({
    loginForm: { username: 'username', password: 'password' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [DecoratorTheme(Theme.DARK), StoreDecorator({
    loginForm: { username: 'username', password: 'password' },
})];
