import { ButtonHTMLAttributes, ReactElement } from 'react';
export declare type ButtonVariant = 'primary' | 'secondary' | 'secondaryGray' | 'tertiary' | 'tertiaryGray';
export declare type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export declare type ButtonState = "default" | "hover" | "focus" | "disabled";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: string | ReactElement;
    className?: string;
    LeadingIcon?: ReactElement;
    TrailingIcon?: ReactElement;
    IconOnly?: React.ReactElement<React.HTMLProps<HTMLElement>>;
    disabled?: boolean;
}
//# sourceMappingURL=Button.d.d.ts.map