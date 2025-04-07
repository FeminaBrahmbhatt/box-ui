import React, { ReactElement, cloneElement, isValidElement } from "react";
import {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonState,
} from "./@interfaces";
import classNames from "classnames";

const buttonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: "btn-primary",
    hover: "btn-primary-hover",
    focus: "btn-primary-focus shadow-grayDark",
    disabled: "btn-primary-disabled",
  },
  secondary: {
    default: "btn-secondary",
    hover: "btn-secondary-hover",
    focus: "btn-secondary-focus shadow-grayDark",
    disabled: "btn-secondary-disabled",
  },
  secondaryGray: {
    default: "btn-secondaryGray",
    hover: "btn-secondaryGray-hover",
    focus: "btn-secondaryGray-focus shadow-grayDark",
    disabled: "btn-secondaryGray-disabled",
  },
  tertiary: {
    default: "btn-tertiary",
    hover: "btn-tertiary-hover",
    focus: "btn-tertiary-focus shadow-grayDark",
    disabled: "btn-tertiary-disabled",
  },
  tertiaryGray: {
    default: "btn-tertiaryGray",
    hover: "btn-tertiaryGray-hover",
    focus: "btn-tertiaryGray-focus shadow-grayDark",
    disabled: "btn-tertiaryGray-disabled",
  },
};

const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
  "2xl": "btn-2xl",
};

const buttonIconSizeClasses: Record<ButtonSize, string> = {
  sm: "btn-icon-sm",
  md: "btn-icon-md",
  lg: "btn-icon-lg",
  xl: "btn-icon-xl",
  "2xl": "btn-icon-2xl",
};

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  disabled,
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  ...buttonProps
}: ButtonProps) => {
  const buttonVariantClassName = buttonVariantClasses[variant];
  const buttonIconSizeClassName = buttonIconSizeClasses[size];

  const setIconSize = (icon: ReactElement, iconSize: number) => {
    if (isValidElement<{ size?: number }>(icon) && "size" in icon.props) {
      return cloneElement(icon, { size: 20 });
    }
    return icon;
  };

  const setClassName = (icon: ReactElement, additionalClass: string) => {
    return isValidElement<{ className?: string }>(icon)
      ? cloneElement(icon, {
          className: classNames(icon.props.className, additionalClass),
        })
      : icon;
  };

  return (
    <button
      type="button"
      className={classNames("btn-base", className, {
        [buttonSizeClasses[size]]: !IconOnly,
        [classNames(buttonIconSizeClassName, "justify-center")]: IconOnly,
        [classNames(buttonVariantClassName.default,
        buttonVariantClassName.hover,
        buttonVariantClassName.focus)]: !disabled,
        [classNames(buttonVariantClassName.disabled, "cursor-not-allowed")]: disabled,
      })}
      {...buttonProps}
    >
      {LeadingIcon && (
        <span>
          {setClassName(
            LeadingIcon,
            classNames({
              "mr-2": size !== "2xl",
              "mr-3": size === "2xl",
            })
          )}
        </span>
      )}
      {children}
      {IconOnly && (
        <span>{setIconSize(IconOnly, size === "2xl" ? 24 : 20)}</span>
      )}
      {TrailingIcon && (
        <span>
          {setClassName(
            TrailingIcon,
            classNames({
              "ml-2": size !== "2xl",
              "ml-3": size === "2xl",
            })
          )}
        </span>
      )}
    </button>
  );
};
