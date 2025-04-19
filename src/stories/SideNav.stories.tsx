import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SideNavProps } from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
import { StoryLayout } from "../StoryLayout";
import { navItemsTop, navItemsBottom } from "../data/navItems";

export default {
  title: "Example/SideNav",
  component: SideNav,
} as Meta;

interface Props extends SideNavProps {
  darkMode: boolean;
}

const SideNavWithState = (args: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <StoryLayout {...args} className="flex flex-col h-screen">
      <SideNav 
      {...args}
      navItemsTop={navItemsTop}
      navItemsBottom={navItemsBottom} 
      open={open}
      setOpen={setOpen} 
      username="Veronica Woods"
      email="veronica@example.com"/>
    </StoryLayout>
  );
}
export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => <SideNavWithState {...args} />,
};
