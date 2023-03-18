import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ProfileCard } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/test/storybook/avatar.jpg";

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'profile',
        age: 33,
        country: Country.UK,
        lastname: 'Sarkis',
        currency: Currency.USD,
        firstname: 'Gurgen',
        city: 'Rostov',
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };

export const Error = Template.bind({});
Error.args = { error: 'true' };
