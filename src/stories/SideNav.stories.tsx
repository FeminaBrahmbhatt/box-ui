import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SideNavProps } from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
import { StoryLayout } from "../StoryLayout";
import { navItemsTop, navItemsBottom } from "../data/navItems";

const meta: Meta<typeof SideNav> = {
  title: "Example/SideNav",
  component: SideNav,
};

export default meta;

interface Props extends SideNavProps {
  darkMode: boolean;
}

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
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
  },
};
