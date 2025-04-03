import { ReactElement, cloneElement, isValidElement } from "react";
import classNames from "classnames";

export const useIconClassName = () => {
  const setClassName = (icon: ReactElement, additionalClass: string) => {
    return isValidElement<{ className?: string }>(icon)
      ? cloneElement(icon, {
          className: classNames(icon.props.className, additionalClass),
        })
      : icon;
  };

  return { setClassName };
};
