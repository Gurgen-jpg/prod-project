import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
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
SwitchLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SwitchDark = Template.bind({});
SwitchDark.args = {};
SwitchDark.decorators = [ThemeDecorator(Theme.DARK)];
