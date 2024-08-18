import React from 'react';
import { Button } from './Button';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary: StoryObj<typeof Button> = Template.bind({});
Primary.args = {
  label: 'Click Me',
  variant: 'filled',
  size: 'medium',
  disabled: false,
};

export const Outlined: StoryObj<typeof Button> = Template.bind({});
Outlined.args = {
  label: 'Click Me',
  variant: 'outlined',
  size: 'medium',
  disabled: false,
};

export const Text: StoryObj<typeof Button> = Template.bind({});
Text.args = {
  label: 'Click Me',
  variant: 'text',
  size: 'medium',
  disabled: false,
};
