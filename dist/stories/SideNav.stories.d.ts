import { Meta, StoryObj } from "@storybook/react";
import { SideNavProps } from "../@interfaces";
import { SideNav } from "../Nav/SideNav";
declare const meta: Meta<typeof SideNav>;
export default meta;
interface Props extends SideNavProps {
    darkMode: boolean;
}
export declare const Default: StoryObj<Props>;
//# sourceMappingURL=SideNav.stories.d.ts.map