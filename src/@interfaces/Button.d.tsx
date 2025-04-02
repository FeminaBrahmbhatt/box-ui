import {ButtonHTMLAttributes, ReactElement} from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'secondaryGray' | 'tertiary' | 'tertiaryGray';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonState = "default" | "hover" | "focus" | "disabled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: string | ReactElement;
    className?: string;
    LeadingIcon?: ReactElement;
    TrailingIcon?: ReactElement;
    IconOnly?: React.ReactElement<React.HTMLProps<HTMLElement>>;  // DOM elements
    disabled?: boolean;
}

