import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/StyleDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: 'Shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: ' rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue ',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: ' rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue  rfrfjqnj ntrcn vfnm tuj pof yjue ',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
