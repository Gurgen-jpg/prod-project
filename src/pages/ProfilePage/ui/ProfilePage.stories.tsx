import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { StoreDecorator } from "shared/config/storybook/WithStore/WithStore";
import ProfilePage from "./ProfilePage";

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;
export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};
ProfilePageLight.decorators = [DecoratorTheme(Theme.LIGHT), StoreDecorator({})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [DecoratorTheme(Theme.DARK), StoreDecorator({})];
