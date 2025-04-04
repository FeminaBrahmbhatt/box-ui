import React, {FC} from "react";
import { NavItemProps } from "../@interfaces";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Typography } from "../Typography";
import { SubNavItem } from "./SubNavItem";
import classNames from "classnames";
import { useIconProps } from "../hooks/useIconProps";

export const NavItem:FC<NavItemProps> = ({
    item,
    isActive,
    activeSubNavItem,
    open,
    openDropdown,
    onClick,
}) => {
    const { setProps } = useIconProps();

    return (
    <Popover key={item.label} className="relative">
    <PopoverButton as={React.Fragment}>
      <li
        className={classNames("navItem group", {
          "px-4": open,
          "ml-2 px-2 w-10": !open,
          "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive,
        })}
        onClick={() => onClick(item)}
      >
        {setProps(item.icon, 24, classNames("group-hover:text-primary-600 dark:group-hover:text-white dark:text-white transform duration-100 ease-out",
            {
              "-rotate-180": item.toggleSidebar && !open,
              "text-gray-900": !isActive,
              "text-primary-600 dark:text-white": isActive,
            },))}
        <>
          <Typography
            variant="md"
            customWeight="medium"
            className={classNames("flex-grow ml-3", {
              "opacity-0 hidden": !open,
            })}
            customColor={classNames(
              "group-hover:text-primary-600 dark:group-hover:text-white",
              {
                "text-gray-800 dark:text-white": !isActive,
                "text-primary-600 dark:text-white": isActive,
              },
            )}
          >
            {item.label}
          </Typography>
          {item.subItems && item.subItems.length > 0 ? (
            <FiChevronDown
              size={20}
              className={classNames(
                "group-hover:text-primary-600 dark:group-hover:text-white transform duration-100 ease-out",
                {
                  "opacity-0 hidden": !open,
                  "text-gray-400": !isActive,
                  "text-primary-600 dark:text-white": isActive,
                  "-rotate-180": openDropdown,
                },
              )}
            />
          ) : null}
        </>
      </li>
    </PopoverButton>

    {openDropdown && open && item.subItems && item.subItems.length > 0 ? (
      <div className="my-2 space-y-1">
        {item.subItems.map((subItem) => (
          <SubNavItem
            key={subItem.label}
            isActive={activeSubNavItem === subItem.label}
            subItem={subItem}
            onClick={() => onClick(item, subItem.label)}
          />
        ))}
      </div>
    ) : null}

    {!open && item.subItems && item.subItems.length > 0 ? (
      <PopoverPanel className="absolute z-50 px-4 py-3 ml-5 space-y-1 bg-white rounded-lg shadow-md -top-3 left-19 w-58 dark:bg-gray-900">
        {item.subItems.map((subItem) => (
          <SubNavItem
            key={subItem.label}
            inDropdown
            isActive={activeSubNavItem === subItem.label}
            subItem={subItem}
            onClick={() => onClick(item, subItem.label)}
          />
        ))}
      </PopoverPanel>
    ) : null}
  </Popover>
)};