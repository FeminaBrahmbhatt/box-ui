/// <reference types="react" />
export interface TextInputProps {
    type: "email" | "text";
    value: string;
    placeholder: string;
    error?: string;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    leadingText?: string;
    LeadingIcon?: React.ReactElement;
    TrailingIcon?: React.ReactElement;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//# sourceMappingURL=TextInput.d.d.ts.map