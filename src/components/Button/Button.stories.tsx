import React from 'react';
import { Button } from './Button';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary: StoryObj<typeof Button> = Template.bind({});
Primary.args = {
  label: 'Click Me',
};
