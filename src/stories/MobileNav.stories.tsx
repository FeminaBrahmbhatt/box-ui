import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MobileNavProps } from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
import { StoryLayout } from "../StoryLayout";
import { navItemsTop, navItemsBottom } from "../data/navItems";
import { MobileNavbar } from "../Nav/MobileNav";
import { FiX } from "react-icons/fi"; // Directly import FiX
import type { IconBaseProps } from "react-icons";

const CloseIcon = FiX as React.FC<IconBaseProps>;
// Wrapper to fix TS JSX issues
 
export default {
  title: "Example/MobileNav",
  component: MobileNavbar,
} as Meta;

interface Props extends MobileNavProps {
  darkMode: boolean;
}

const MobileNavWithState = (args: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StoryLayout {...args}>
      <MobileNavbar open={open} toggleOpen={handleToggle} />

      {open && (
        <div
          data-testid="backdrop"
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-gray-500 cursor-pointer bg-opacity-80"
          onClick={() => setOpen(false)}
        >
           <CloseIcon
            data-testid="close-icon"
            size={40}
            className="fixed text-white top-5 right-9"
            role="button"
            aria-label="Close sidebar"
          />
        </div>
      )}

      {open && (
        <SideNav
          className="relative z-50 h-screen -mt-20"
          navItemsTop={navItemsTop}
          navItemsBottom={navItemsBottom}
          open={true}
          setOpen={handleToggle}
          username="Veronica Woods"
          email="veronica@example.com"
        />
      )}
    </StoryLayout>
  );
};

export const Default: StoryObj<Props> = {
  args: {
    darkMode: false,
  },
  render: (args) => <MobileNavWithState {...args} />,
};
