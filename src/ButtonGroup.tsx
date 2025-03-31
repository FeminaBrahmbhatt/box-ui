import React, { FC } from "react";
import { IButtonItem } from "./@interfaces";
import classNames from "classnames";

export interface ButtonGroupProps {
  options: IButtonItem[];
  activeOption: string;
  setActiveOption: (activeOption: string) => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  options,
  activeOption,
  setActiveOption,
}) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={option.value}
          className={classNames(
            "inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-center text-sm focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500",
            {
                "rounded-l-lg": index === 0,
                "rounded-r-lg": index === options.length - 1,
                "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
                "border-r-0": index !== 0 && index !== options.length - 1
            }
          )}
          onClick={() => setActiveOption(option.value)}
        >
          {option.content}
        </button>
      ))}
    </div>
  );
};
