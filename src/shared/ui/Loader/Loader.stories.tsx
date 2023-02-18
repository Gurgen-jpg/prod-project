import { Loader } from "shared/ui/Loader/Loader";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: 'Shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
