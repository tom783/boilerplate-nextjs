import Button from '@compo/common/Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

const Icon = () => <i>icon</i>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    icon: <Icon />,
    iconPosition: 'left',
    size: 'md',
    color: '#000',
    buttonType: 'primary',
    loading: false,
    loadingText: '',
    children: 'test',
    onClick: () => {
      console.log('clicked');
    },
  },
};
