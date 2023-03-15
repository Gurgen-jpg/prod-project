import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Select } from "./Select";

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select value',
    options: [
        { value: '12345', content: 'first select' },
        { value: '12345', content: 'second select' },
        { value: '12345', content: 'third select' },
        { value: '12345', content: 'fourth select' },
    ],
};
