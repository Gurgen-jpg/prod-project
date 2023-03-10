import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Theme } from "app/providers/ThemeProvider";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
    title: 'Shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'appLink',
    theme: AppLinkTheme.PRIMARY,
};
export const Secondary = Template.bind({});
Secondary.args = {
    children: 'appLink',
    theme: AppLinkTheme.SECONDARY,
};
export const Red = Template.bind({});
Red.args = {
    children: 'appLink',
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'appLink',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [DecoratorTheme(Theme.DARK)];
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'appLink',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [DecoratorTheme(Theme.DARK)];
export const RedDark = Template.bind({});
RedDark.args = {
    children: 'appLink',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [DecoratorTheme(Theme.DARK)];
