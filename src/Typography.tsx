import React, { FC, JSX } from "react";
import classNames from "classnames";

type TypographyVariant =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";

type TypographyWeightOption = "regular" | "medium" | "semibold" | "bold";

type TypographyWeightValue = "font-normal" | "font-medium" | "font-semibold" | "font-bold";

export interface TypographyProps {
  variant?: TypographyVariant;
  customWeight?: TypographyWeightOption;
  customColor?: string;
  customClass?: string;
  className?: string;
  children: string | React.ReactNode;
}

const TypographyVariantClasses: Record<TypographyVariant, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  h6: "text-h6",
  h5: "text-h5",
  h4: "text-h4",
  h3: "text-h3",
  h2: "text-h2",
  h1: "text-h1",
};

const TypographyWeightClasses: Record<TypographyWeightOption, TypographyWeightValue> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Typography: FC<TypographyProps> = ({
  variant = "md",
  customWeight = "regular",
  customColor,
  className,
  children,
}) => {
    const TypographyVariantClassName = TypographyVariantClasses[variant];
    const TypographyWeightClassName = TypographyWeightClasses[customWeight];


  const Component: React.ElementType =
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant ?? "p") ? (variant as keyof JSX.IntrinsicElements) : "p";

  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className,
        {
            "tracking-tight": ["h1", "h2", "h3"].includes(variant),
            "text-black dark:text-white": !customColor,
        },
        customColor         
      )}
    >
      {children}
    </Component>
  );
};
