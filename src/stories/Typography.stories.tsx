import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Typography, TypographyProps } from "../Typography";
import { StoryLayout } from "../StoryLayout";

const meta: Meta<typeof Typography> = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

interface Props extends TypographyProps {
  darkMode: boolean;
}

export const TypographyDynamic: StoryObj<Props> = {
  args: {
    variant: "h1",
    customColor: "", //text-primary-600 dark:text-white
    customWeight: "regular",
    className: "",
    darkMode: false,
  },
  render: (args) => {
    const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(
      args.variant ?? "p"
    );
    return (
      <StoryLayout {...args} className="space-y-2">
        <Typography {...args}>
          {isHeading ? "Display" : "Text"} {args.variant} <br />{" "}
          {args.customWeight}
        </Typography>
      </StoryLayout>
    );
  },
};

export const TypographyHeadings: StoryObj<Props> = {
  args: {
    customWeight: "regular",
    className: "",
    darkMode: false,
  },
  parameters: {
    controls: { 
        exclude: ["variant", "customColor", "className"] 
    },
  },
  render: (args) => (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="h1">
        Display h1
      </Typography>

      <Typography {...args} variant="h2">
        Display h2
      </Typography>

      <Typography {...args} variant="h3">
        Display h3
      </Typography>

      <Typography {...args} variant="h4">
        Display h4
      </Typography>

      <Typography {...args} variant="h5">
        Display h5
      </Typography>

      <Typography {...args} variant="h6">
        Display h6
      </Typography>
    </StoryLayout>
  ),
};

export const TypographyText: StoryObj<Props> = {
  args: {
    customWeight: "regular",
    className: "",
    darkMode: false,
  },
  parameters: {
    controls: { 
        exclude: ["variant", "customColor", "className"] 
    },
  },
  render: (args) => {
    return (
      <StoryLayout {...args} className="space-y-2">
        <Typography {...args} variant="xl">
          Text xl
        </Typography>
        <Typography {...args} variant="lg">
          Text lg
        </Typography>
        <Typography {...args} variant="md">
          Text md
        </Typography>
        <Typography {...args} variant="sm">
          Text sm
        </Typography>
        <Typography {...args} variant="xs">
          Text xs
        </Typography>
      </StoryLayout>
    );
  },
};
