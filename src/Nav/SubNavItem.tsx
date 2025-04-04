import React, { FC } from "react";
import { Typography } from "../Typography";
import classNames from "classnames";
import { SubNavItemProps } from "../@interfaces";

export const SubNavItem: FC<SubNavItemProps> = ({
  inDropdown,
  isActive,
  subItem,
  onClick,
}) => {
  return (
    <li
      key={subItem.label}
      className={classNames("navItem group", {
        "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive,
      })}
      onClick={onClick}
    >
      <Typography
        variant="md"
        customWeight="medium"
        customColor={classNames(
          "group-hover:text-primary-600 dark:group-hover:text-white",
          {
            "text-gray-800 dark:text-white": !isActive,
            "text-primary-600 dark:text-white": isActive,
          }
        )}
        className={classNames("flex-grow", {
          "pl-13": !inDropdown,
          "pl-4": inDropdown,
        })}
      >
        {subItem.label}
      </Typography>
    </li>
  );
};
