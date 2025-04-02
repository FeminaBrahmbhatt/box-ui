import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ButtonProps } from "../@interfaces";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { StoryLayout } from "../StoryLayout";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

interface Props extends ButtonProps {
  darkMode: boolean;
}

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    darkMode: false,
    children: "Button",
    size: 'md',
    variant: 'primary',
    disabled: false,
    LeadingIcon: undefined,
    TrailingIcon: undefined,
    IconOnly: undefined,
    className: ''
  },
  render: (args) => {
    return (
      <StoryLayout {...args} className="flex inline-flex flex-row space-x-2">
        <Button {...args}>Primary</Button>
      </StoryLayout>
    );
  },
};

export const Variants: Story = {
  args: {
    darkMode: false,
    variant: "primary",
  },
  render: (args) => {
    return (
      <StoryLayout {...args} className="flex inline-flex flex-row space-x-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Primary</Button>
        <Button variant="secondaryGray">Primary</Button>
        <Button variant="tertiary">Primary</Button>
        <Button variant="tertiaryGray">Primary</Button>
      </StoryLayout>
    );
  },
};

export const Sizes: Story = {
  args: {
    darkMode: false,
    variant: "primary",
    size: "md",
  },
  render: (args) => {
    return (
      <StoryLayout {...args} className="flex inline-flex flex-row space-x-2">
        <Button size="sm">sm</Button>
        <Button size="md">md</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
        <Button size="2xl">2xl</Button>
      </StoryLayout>
    );
  },
};

export const TrailingIconButton: Story = {
  args: {
    darkMode: false,
    children: "Button",
    TrailingIcon: <FiArrowRight />,
  },
};

export const LeadingIconButton: Story = {
  args: {
    darkMode: false,
    children: "Button",
    LeadingIcon: <FiArrowLeft />,
  },
};

export const IconOnlyButton: Story = {
  args: {
    darkMode: false,
    IconOnly: <FiStar />,
  },
};
