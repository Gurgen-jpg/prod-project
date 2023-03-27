import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticlesDetailsPage from "./ArticlesDetailsPage";

export default {
    title: 'Shared/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
