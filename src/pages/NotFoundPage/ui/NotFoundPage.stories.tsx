import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { NotFoundPage } from "./NotFoundPage";

export default {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;
export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};
NotFoundPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
