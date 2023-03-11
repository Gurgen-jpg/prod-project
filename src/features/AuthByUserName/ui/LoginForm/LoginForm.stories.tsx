import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { StoreDecorator } from "shared/config/storybook/WithStore/WithStore";
import LoginForm from "./LoginForm";

export default {
    title: 'Features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.args = {};
LoginFormPrimary.decorators = [StoreDecorator({
    loginForm: { username: `story`, password: `123`, isLoading: false },
})];
