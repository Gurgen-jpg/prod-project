import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { Text, TextTheme } from "./Text";

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    title: 'textPrimary',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    title: '',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    title: 'textPrimary',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
};
TextPrimaryDark.decorators = [DecoratorTheme(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [DecoratorTheme(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    title: '',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
};
onlyTextDark.decorators = [DecoratorTheme(Theme.DARK)];

export const TextError = Template.bind({});
TextError.args = {
    title: 'textError',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
    theme: TextTheme.ERROR,
};

export const TextErrorDark = Template.bind({});
TextErrorDark.args = {
    title: 'textError',
    text: 'webpack-hot-middlewarewebpack built preview 27d2383cc53dab1958ce in 254',
    theme: TextTheme.ERROR,
};
TextErrorDark.decorators = [DecoratorTheme(Theme.DARK)];
