import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { DecoratorTheme } from "shared/config/storybook/ThemeDecorator/DecoratorTheme";
import { StoreDecorator } from "shared/config/storybook/WithStore/WithStore";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/test/storybook/avatar.jpg";
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
ProfilePageLight.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'profile',
            age: 33,
            country: Country.UK,
            lastname: 'Sarkis',
            currency: Currency.USD,
            firstname: 'Gurgen',
            city: 'Rostov',
            avatar,
        },
    },
})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [DecoratorTheme(Theme.DARK), StoreDecorator({})];
