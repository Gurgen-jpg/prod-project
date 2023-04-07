import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticlePageFilter } from "./ArticlePageFilter";

export default {
    title: 'entities/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilter>;

const Template: ComponentStory<typeof ArticlePageFilter> = (args) => <ArticlePageFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
