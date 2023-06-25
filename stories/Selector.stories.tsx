import Selector, { SelectOptionItem } from '@compo/common/Selector';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Selector> = {
  title: 'Components/common/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Selector>;

const Wrapper: Story = {
  render: ({ ...args }) => {
    const [data, setData] = useState('');

    const onChange = (value: string) => {
      setData(value);
    };

    return (
      <div tw='h-[100vh]'>
        <Selector {...args} onChange={onChange}>
          <SelectOptionItem dataValue='a' />
          <SelectOptionItem dataValue='abc' />
          <SelectOptionItem dataValue='dtet' />
          <SelectOptionItem dataValue='google test' />
        </Selector>
      </div>
    );
  },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  ...Wrapper,
  args: {},
};
