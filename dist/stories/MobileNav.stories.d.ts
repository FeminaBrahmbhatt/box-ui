import { Meta, StoryObj } from "@storybook/react";
import { MobileNavProps } from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
declare const meta: Meta<typeof SideNav>;
export default meta;
interface Props extends MobileNavProps {
    darkMode: boolean;
}
export declare const Default: StoryObj<Props>;
//# sourceMappingURL=MobileNav.stories.d.ts.map