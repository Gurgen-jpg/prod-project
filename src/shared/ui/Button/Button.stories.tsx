import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];