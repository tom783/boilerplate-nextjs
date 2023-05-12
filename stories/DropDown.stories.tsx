import DropDown, { DropDownList } from '@compo/common/DropDown';
import Icon from '@compo/common/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DropDown> = {
  title: 'Components/common/DropDown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DropDown>;

const Wrapper: Story = {
  render: ({ ...args }) => {
    const [dropDown, setDropDown] = useState('default');

    const onChange = (value: string) => {
      setDropDown(value);
    };

    return (
      <div tw='h-[100vh]'>
        <DropDown {...args} value={dropDown} onChange={onChange}>
          <>
            <DropDownList value='test' text='test' />
            <DropDownList value='test1' text='test1' />
            <DropDownList value='test2' text='test2' />
          </>
        </DropDown>
      </div>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  ...Wrapper,
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    icon: (
      <Icon
        icon={
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
          </svg>
        }
        size='sm'
      />
    ),
  },
};
