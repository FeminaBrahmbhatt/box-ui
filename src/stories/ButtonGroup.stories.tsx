import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroupProps, ButtonGroup } from "../ButtonGroup";
import { StoryLayout } from "../StoryLayout";
import { options1, options2, options3 } from "../data/options";

const meta: Meta<typeof ButtonGroup> = {
  title: "Example/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

export const LabelButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);

    return (
      <StoryLayout {...args}>
        <div>
          <ButtonGroup
            options={options1}
            activeOption={activeItem1}
            setActiveOption={setActiveItem1}
          />
        </div>
      </StoryLayout>
    );
  },
};

export const IconButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [activeView, setViewOption] = useState<string>("list");

    return (
      <StoryLayout {...args}>
        <div>
          <ButtonGroup
            options={options3}
            activeOption={activeView}
            setActiveOption={setViewOption}
          />
        </div>
      </StoryLayout>
    );
  },
};

export const LabelIconButtonGroup: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);

    return (
      <StoryLayout {...args}>
        <div>
          <ButtonGroup
            options={options2}
            activeOption={activeItem2}
            setActiveOption={setActiveItem2}
          />
        </div>
      </StoryLayout>
    );
  },
};
