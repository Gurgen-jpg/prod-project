import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
    title: 'Widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;
export const SwitchLight = Template.bind({});
SwitchLight.args = {};
SwitchLight.decorators = [DecoratorTheme(Theme.LIGHT)];

export const SwitchDark = Template.bind({});
SwitchDark.args = {};
SwitchDark.decorators = [DecoratorTheme(Theme.DARK)];
