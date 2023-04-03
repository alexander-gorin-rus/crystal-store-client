import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from '.';
import { IInputProps } from './types';

export default {
  title: 'CrystalProject/InputComponent',
  component: InputComponent,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const EmailInput = (args: IInputProps) => (
  <div>
    <InputComponent
      title='email'
      placeholder='email'
      type='email'
      onChange={() => {}}
      error
    />
  </div>
);
EmailInput.args = Template.bind({
  label: 'EmailInput',
});

export const TextInput = (args: IInputProps) => (
  <div>
    <InputComponent
      title='text'
      placeholder='text'
      type='text'
      onChange={() => {}}
      error
    />
  </div>
);
TextInput.args = Template.bind({
  label: 'TextInput',
});
