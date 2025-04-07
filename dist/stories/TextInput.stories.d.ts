import { TextInputProps } from "../@interfaces";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";
declare const meta: Meta<typeof TextInput>;
export default meta;
interface Props extends TextInputProps {
    darkMode: boolean;
}
export declare const Default: StoryObj<Props>;
export declare const LeadingTextInput: StoryObj<Props>;
//# sourceMappingURL=TextInput.stories.d.ts.map