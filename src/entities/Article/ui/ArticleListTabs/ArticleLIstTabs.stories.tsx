import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleListTabs } from "./ArticleListTabs";

export default {
    title: 'entities/ArticleListTabs',
    component: ArticleListTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListTabs>;

const Template: ComponentStory<typeof ArticleListTabs> = (args) => <ArticleListTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
