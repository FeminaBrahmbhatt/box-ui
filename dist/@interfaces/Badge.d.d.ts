import React from "react";
export declare type BadgeVariant = "gray" | "primary" | "warning" | "error" | "success";
export declare type BadgeSize = "sm" | "md" | "lg";
export interface BadgeProps {
    children: string | React.ReactElement;
    LeadingIcon?: React.ReactElement;
    TrailingIcon?: React.ReactElement;
    className?: string;
    variant: BadgeVariant;
    size: BadgeSize;
}
//# sourceMappingURL=Badge.d.d.ts.map