import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ButtonProps } from "../@interfaces";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { StoryLayout } from "../StoryLayout";
import { IconWrapper } from "../utils/IconWrapper";

export default{
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;
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
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryGray">Secondary Gray</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="tertiaryGray">Tertiary Gray</Button>
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
    TrailingIcon: <IconWrapper Icon={FiArrowRight} data-testid="trailingIcon"/>,
  },  
  render: (args) => (
    <StoryLayout {...args}>
      <Button {...args} />
    </StoryLayout>
  ),
};

export const LeadingIconButton: Story = {
  args: {
    darkMode: false,
    children: "Button",
    LeadingIcon: <IconWrapper Icon={FiArrowLeft} data-testid="LeadingIcon"/>,
  },
  render: (args) => (
    <StoryLayout {...args}>
      <Button {...args} />
    </StoryLayout>
  ),
};

export const IconOnlyButton: Story = {
  args: {
    darkMode: false,
    IconOnly: <IconWrapper Icon={FiStar} data-testid="iconOnly"/>,
  },
  render: (args) => (
    <StoryLayout {...args}>
      <Button {...args} />
    </StoryLayout>
  ),
};
