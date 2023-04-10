import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ArticleType } from "entities/Article/model/types/article";
import { Tabs } from "./Tabs";

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            content: 'Tab 1',
            value: ArticleType.IT,
        },
        {
            content: 'Tab 2',
            value: ArticleType.SCIENCE,
        },
        {
            content: 'Tab 3',
            value: ArticleType.ECONOMICS,
        },
    ],
    value: ArticleType.IT,
    onTabClick: action('onTabClick'),
};
