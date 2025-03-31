import React, { FC, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroupProps, ButtonGroup } from "./ButtonGroup";
import { StoryLayout } from "./StoryLayout";
import { options1, options2, options3 } from "./data/options";

const meta: Meta<typeof ButtonGroup> = {
  title: "ButtonGroup",
  component: ButtonGroup,
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
    const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);
    const [activeView, setViewOption] = useState<string>("list");

    return (
      <StoryLayout {...args} className="space-y-4">
        <div>
          <ButtonGroup
            options={options1}
            activeOption={activeItem1}
            setActiveOption={(value) => setActiveItem1(value)}
          />
        </div>
        <div>
          <ButtonGroup
            options={options2}
            activeOption={activeItem2}
            setActiveOption={(value) => setActiveItem2(value)}
          />
        </div>
        <div>
          <ButtonGroup
            options={options3}
            activeOption={activeView}
            setActiveOption={(value) => setViewOption(value)}
          />
        </div>
      </StoryLayout>
    );
  },
};
