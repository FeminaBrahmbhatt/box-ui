import React from "react";

export type BadgeVariant = "gray" | "primary" | "warning" | "error" | "success";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
    children: string | React.ReactElement;
    LeadingIcon?: React.ReactElement;
    TrailingIcon?: React.ReactElement;
    className?: string;
    variant: BadgeVariant;
    size: BadgeSize;
}