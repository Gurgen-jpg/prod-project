import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
    title: 'entities/comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'Comment 1',
        user: {
            id: '1',
            username: 'John Doe',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = { isLoading: true };