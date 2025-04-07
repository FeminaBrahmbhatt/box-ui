import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ButtonProps } from "../@interfaces";
declare const meta: Meta<typeof Button>;
export default meta;
interface Props extends ButtonProps {
    darkMode: boolean;
}
declare type Story = StoryObj<Props>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const TrailingIconButton: Story;
export declare const LeadingIconButton: Story;
export declare const IconOnlyButton: Story;
//# sourceMappingURL=Button.stories.d.ts.map