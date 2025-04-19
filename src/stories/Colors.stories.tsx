import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ColorBox } from "../ColorBox";
import { colors } from "../data/colors";
import { StoryLayout } from "../StoryLayout";

export default {
  title: "Colors",
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

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
