import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import AboutPage from "./AboutPage";

export default {
    title: 'Pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;
export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
