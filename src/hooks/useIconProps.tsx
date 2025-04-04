import { ReactElement, cloneElement, isValidElement } from "react";
import classNames from "classnames";

export const useIconProps = () => {
  const setProps = (
    icon: ReactElement,
    iconSize: number,
    additionalClass: string
  ) => {
    return isValidElement<{ size?: number; className?: string }>(icon)
      ? cloneElement(icon, {
          size: iconSize,
          className: classNames(icon.props.className, additionalClass),
        })
      : icon;
  };

  return { setProps };
};
