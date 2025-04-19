import React, { useState, ChangeEvent } from "react";
import { TextInputProps } from "../@interfaces";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";
import { StoryLayout } from "../StoryLayout";
import { FiMail, FiHelpCircle, FiAlertCircle } from "react-icons/fi";
import { IconWrapper } from "../utils/IconWrapper";

export default {
  title: "Example/TextInput",
  component: TextInput,
} as Meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
    value: ''
  },
  render: (args) => <DefaultTextInputStory {...args} />,
};

const DefaultTextInputStory = (args: Props) => {
  const [text1, setText1] = useState<string>(args.value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value);
  };

  return (
    <StoryLayout {...args}>
      <TextInput
        {...args}
        type="email"
        value={text1}
        handleChange={handleChange}
        label="Email"
        placeholder="veronica@example.com"
        helperText="This is a hint text to help the user."
        LeadingIcon={<IconWrapper Icon={FiMail} />}
        TrailingIcon={<IconWrapper Icon={FiHelpCircle} />}
        disabled={args.disabled}
      />
      <div className="mb-4" />
      <TextInput
        {...args}
        type="email"
        value={text1}
        handleChange={handleChange}
        label="Email"
        placeholder="veronica@example.com"
        helperText="This is a hint text to help the user."
        error="This is an error message."
        LeadingIcon={<IconWrapper Icon={FiMail} />}
        TrailingIcon={<IconWrapper Icon={FiHelpCircle} />}
        disabled={args.disabled}
      />
    </StoryLayout>
  );
};

export const LeadingTextInput: StoryObj<Props> = {
  args: {
    darkMode: false,
    value: ''
  },
  render: (args) => <LeadingTextInputStory {...args} />,
};

const LeadingTextInputStory = (args: Props) => {
  const [text1, setText1] = useState<string>(args.value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value);
  };

  return (
    <StoryLayout {...args}>
      <TextInput
        {...args}
        type="text"
        value={text1}
        handleChange={handleChange}
        label="Website"
        placeholder="example.com"
        leadingText="https://"
        helperText="This is a hint text to help the user."
        TrailingIcon={<IconWrapper Icon={FiHelpCircle} />}
        disabled={args.disabled}
      />
      <div className="mb-4" />
      <TextInput
        {...args}
        type="text"
        value={text1}
        handleChange={handleChange}
        label="Website"
        placeholder="example.com"
        leadingText="https://"
        error="This is an error message."
        TrailingIcon={<IconWrapper Icon={FiAlertCircle} />}
        disabled={args.disabled}
      />
    </StoryLayout>
  );
};

