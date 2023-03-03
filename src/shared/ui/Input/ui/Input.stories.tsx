import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "shared/ui/Input/ui/Input";

export default {
    title: 'Shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    placeholder: "Placeholder",
    value: "Value",
};
