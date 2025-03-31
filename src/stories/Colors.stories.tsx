import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ColorBox } from "./ColorBox";
import { colors } from "./data/colors";
import { StoryLayout } from "./StoryLayout";

const meta: Meta<Props> = {
  title: "Colors",
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => (
    <StoryLayout {...args} className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
      {colors.map((color) => (
        <ColorBox key={color.bgClass} code={color.code} hex={color.hex} bgClass={color.bgClass}/>
      ))}
    </StoryLayout>
  ),
};
