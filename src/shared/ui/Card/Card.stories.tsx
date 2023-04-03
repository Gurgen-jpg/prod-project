import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "shared/ui";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { Theme } from "app/providers/ThemeProvider";
import { Card } from "./Card";

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Story" text="card text" />,
};
Normal.decorators = [DecoratorTheme(Theme.LIGHT)];

export const Green = Template.bind({});
Green.args = {
    children: <Text title="Story" text="card text" />,
};
Green.decorators = [DecoratorTheme(Theme.GRREEN)];
export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Story" text="card text" />,
};
Dark.decorators = [DecoratorTheme(Theme.DARK)];
