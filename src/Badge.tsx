import React, { FC } from "react";
import { BadgeProps, BadgeSize, BadgeVariant } from "./@interfaces";
import classNames from "classnames";

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  warning: "badge-warning",
  error: "badge-error",
  success: "badge-success",
};

export const Badge: FC<BadgeProps> = ({
  className,
  children,
  LeadingIcon,
  TrailingIcon,
  variant,
  size,
}) => {
  const badgeVariantClassName = BadgeVariantClasses[variant];
  const badgeSizeClassName = BadgeSizeClasses[size];

  return (
    <div
      className={classNames(
        "badge-base",
        badgeSizeClassName,
        badgeVariantClassName,
        className
      )}
    >
      {LeadingIcon && <span className="mr-1.5">{LeadingIcon}</span>}
      {children}
      {TrailingIcon && <span className="mr-1.5">{TrailingIcon}</span>}
    </div>
  );
};
