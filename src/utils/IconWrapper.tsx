import React from "react";
import { IconType } from "react-icons";

interface IconWrapperProps {
  Icon: IconType;
}

export const IconWrapper = ({ Icon, ...props }: IconWrapperProps) => {
  const RenderedIcon = Icon as React.FC; // ✅ casting to a functional component
  return <RenderedIcon {...props}/>;
};