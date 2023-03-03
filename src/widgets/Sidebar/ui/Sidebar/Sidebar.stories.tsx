import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Theme } from "app/providers/ThemeProvider";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { Sidebar } from "./Sidebar";

export default {
    title: 'Widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [DecoratorTheme(Theme.DARK)];
