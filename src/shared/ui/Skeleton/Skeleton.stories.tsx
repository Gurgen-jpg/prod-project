import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { Theme } from "app/providers/ThemeProvider";
import {
    Skeleton,
} from "./Skeleton";

export default {
    title: 'Shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 200,
};
NormalDark.decorators = [DecoratorTheme(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [DecoratorTheme(Theme.DARK)];
