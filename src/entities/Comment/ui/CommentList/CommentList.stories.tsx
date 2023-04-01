import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: 'entities/comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Comment 1',
            user: {
                id: '1',
                username: 'John Doe',
            },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: {
                id: '1',
                username: 'Alan Kim',
            },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
