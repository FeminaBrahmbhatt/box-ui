import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroupProps, ButtonGroup } from "../ButtonGroup";
import { StoryLayout } from "../StoryLayout";
import { options1, options2, options3 } from "../data/options";

export default {
  title: "Example/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;
interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

const LabelButtonGroupComponent = (args: Props) => {
  const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);

  return (
    <StoryLayout {...args}>
      <ButtonGroup
        {...args}
        options={options1}
        activeOption={activeItem1}
        setActiveOption={setActiveItem1}
      />
    </StoryLayout>
  );
};

export const LabelButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) =>  <LabelButtonGroupComponent {...args} />,
};

const IconButtonGroupComponent = (args: Props) => {
  const [activeView, setViewOption] = useState<string>("list");

  return (
    <StoryLayout {...args}>
      <ButtonGroup
        {...args}
        options={options3}
        activeOption={activeView}
        setActiveOption={setViewOption}
      />
    </StoryLayout>
  );
};

export const IconButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => <IconButtonGroupComponent {...args} />,
};

const LabelIconButtonGroupComponent = (args: Props) => {
  const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);

  return (
    <StoryLayout {...args}>
      <ButtonGroup
        {...args}
        options={options2}
        activeOption={activeItem2}
        setActiveOption={setActiveItem2}
      />
    </StoryLayout>
  );
};

export const LabelIconButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => <LabelIconButtonGroupComponent {...args} />,
};
