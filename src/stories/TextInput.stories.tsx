import React, { useState, ChangeEvent } from "react";
import { TextInputProps } from "../@interfaces";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";
import { StoryLayout } from "../StoryLayout";
import { FiMail, FiHelpCircle, FiAlertCircle } from "react-icons/fi";
const meta: Meta<typeof TextInput> = {
  title: "Example/TextInput",
  component: TextInput,
};

export default meta;

interface Props extends TextInputProps {
  darkMode: boolean;
}

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [text1, setText1] = useState<string>(args.value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText1(e.target.value);
    };

    return (
      <StoryLayout {...args}>
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text1}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
      </StoryLayout>
    );
  },
};

export const LeadingTextInput: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [text1, setText1] = useState<string>(args.value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText1(e.target.value);
    };

    return (
      <StoryLayout {...args}>
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text1}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </StoryLayout>
    );
  },
};
