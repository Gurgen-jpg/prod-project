import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/WithStore/WithStore";
import { action } from "@storybook/addon-actions";
import AddNewComment from "./AddNewComment";

export default {
    title: 'features/AddNewComment',
    component: AddNewComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendNewComment: action('onSendNewComment'),
};
Normal.decorators = [StoreDecorator({})];
