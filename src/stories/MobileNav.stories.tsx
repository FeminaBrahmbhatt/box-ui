
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MobileNavProps} from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
import { StoryLayout } from "../StoryLayout";
import { navItemsTop, navItemsBottom } from "../data/navItems";
import { MobileNavbar } from "../Nav/MobileNav";
import { FiX } from "react-icons/fi";

const meta: Meta<typeof SideNav> = {
  title: "Example/MobileNav",
  component: MobileNavbar,
};

export default meta;

interface Props extends MobileNavProps {
  darkMode: boolean;
}

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => {
    const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StoryLayout {...args}>
      <MobileNavbar open={open} toggleOpen={handleToggle} />

      {open ? (
        <div
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-gray-500 cursor-pointer bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          <FiX size={40} className="fixed text-white top-5 right-9" />
        </div>
      ) : null}

      {open ? (
        <SideNav
          className="relative z-50 h-screen -mt-20"
          navItemsTop={navItemsTop}
          navItemsBottom={navItemsBottom}
          open={true}
          setOpen={handleToggle}
          username="Veronica Woods"
          email="veronica@example.com"
        />
      ) : null}
    </StoryLayout>
    );
  },
};
