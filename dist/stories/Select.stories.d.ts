import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../Select";
import { SelectProps } from "../@interfaces";
declare const meta: Meta<typeof Select>;
export default meta;
interface Props extends SelectProps {
    darkMode: false;
}
export declare const Default: StoryObj<Props>;
export declare const SelectWithIcon: StoryObj<Props>;
//# sourceMappingURL=Select.stories.d.ts.map