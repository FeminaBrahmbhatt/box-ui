import React, {
  FC,
  ReactElement,
  isValidElement,
  cloneElement,
} from "react";
import { SelectProps } from "./@interfaces";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import classNames from "classnames";
import {FiCheck, FiChevronDown} from 'react-icons/fi'

export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
}) => {

  const ArrowDown = FiChevronDown as React.FC<any>;
  const Check = FiCheck as React.FC<any>;

  const setProps = (
    icon: ReactElement,
    iconSize: number,
    additionalClass: string
  ) => {
    if (
      isValidElement<{ size?: number; className?: string }>(icon) &&
      "size" in icon.props
    ) {
      return cloneElement(icon, {
        size: iconSize,
        className: classNames(icon.props.className, additionalClass),
      });
    }
    return icon;
  };

  return (
    <div className={classNames("relative inline-block", width)}>
      <Listbox value={selectedOption && selectedOption.value} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <ListboxButton className={classNames("shadow-sm flex items-center text-md border border-gray-300 dark:border-gray-500 h-11 px-3.5 rounded-lg bg-white dark:bg-gray-800",
                "focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20 whitespace-nowrap",
                {
                  "text-gray-900 dark:text-white": selectedOption,
                  "text-gray-500 dark:text-gray-300": !selectedOption,
                },
                width,)}>
              {LeadingIcon && (
                <div className="w-5 h-5 mr-2 overflow-hidden">
                  {setProps(LeadingIcon, 20, classNames("text-gray-400"))}
                </div>
              )}
              {selectedOption ? selectedOption.label : placeholder}
              <ArrowDown
                size={20}
                className={classNames(
                  "text-gray-500 dark:text-gray-300 transform duration-100 ease-out",
                  {
                    "-rotate-180": open,
                    "ml-auto": width,
                    "ml-3.5": !width,
                  },
                )}
              />
            </ListboxButton>
            <ListboxOptions className="absolute z-10 inline-flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg top-13 dark:border-gray-500 dark:bg-gray-800">
              {options?.map((option, index) => (
                <ListboxOption as={React.Fragment} key={option.value} value={option.value}>
                    {({focus, selected}) => (
                        <li className={classNames(classNames(
                        "flex items-center pl-3.5 pr-3 justify-between h-11 text-gray-900 dark:text-white text-md cursor-pointer hover:bg-primary-25 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 whitespace-nowrap",
                        {
                          "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10":
                            focus,
                          "rounded-t-lg": index === 0,
                          "rounded-b-lg": index === options.length - 1,
                        },
                      ))}>
                        <div className="flex items-center">{option.label}</div>
                        {selected && <Check className="ml-5 text-primary-600 dark:text-white" />}
                    </li>
                    )}
                    
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </div>
  );
};
