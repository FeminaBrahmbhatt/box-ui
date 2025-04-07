import React, { FC } from "react";
declare type TypographyVariant = "xs" | "sm" | "md" | "lg" | "xl" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
declare type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";
export interface TypographyProps {
    variant?: TypographyVariant;
    customWeight?: TypographyWeightOption;
    customColor?: string;
    customClass?: string;
    className?: string;
    children: string | React.ReactNode;
}
export declare const Typography: FC<TypographyProps>;
export {};
//# sourceMappingURL=Typography.d.ts.map