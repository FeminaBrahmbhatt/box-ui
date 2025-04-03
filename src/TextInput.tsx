import React, { FC } from "react";
import { TextInputProps } from "./@interfaces";
import { Typography } from "./Typography";
import classNames from "classnames";
import { useIconClassName } from "./hooks/useIconClassName";

export const TextInput: FC<TextInputProps> = ({
  type,
  value,
  label,
  placeholder,
  error,
  helperText,
  disabled,
  LeadingIcon,
  TrailingIcon,
  leadingText,
  handleChange,
}) => {
  const { setClassName } = useIconClassName();

  return (
    <div>
      {label && (
        <Typography
          variant="sm"
          customWeight="medium"
          customColor="text-gray-700 dark:text-white"
          className="mb-1.5"
        >
          {label}
        </Typography>
      )}
      <div
        className={classNames("relative", { "flex items-center": leadingText })}
      >
        <div className="h-11 absolute shadow-sm rounded-lg w-full flex justify-between items-center px-3.5 pointer-events-none">
          {LeadingIcon ? setClassName(LeadingIcon, "text-gray-500") : <div />}
          {TrailingIcon &&
            setClassName(
              TrailingIcon,
              classNames({ "text-error-500": error, "text-gray-400": !error })
            )}
        </div>
        {leadingText && (
          <Typography
            variant="sm"
            customWeight="regular"
            className={classNames(
                "flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500",
                {
                  "bg-gray-50 dark:bg-gray-700": disabled,
                  "dark:bg-gray-800": !disabled,
                },
              )}
          >
            {leadingText}
          </Typography>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          className={classNames(
            "w-full select-none text-gray-900 dark:text-white text-md border h-11 px-2",
            {
              "pl-9": LeadingIcon,
              "pr-9": TrailingIcon,
              "rounded-l-0 rounded-r-lg": leadingText,
              "rounded-lg": !leadingText,
              "border-gray-300 dark:border-gray-500 focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20":
                !error,
              "border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100":
                error,
              "bg-white dark:bg-gray-800": !disabled,
              "bg-gray-50 dark:bg-gray-700": disabled,
            },
          )}
        />
      </div>
      {error && (
        <Typography
          variant="sm"
          customWeight="regular"
          className="mt-1.5 text-error-500"
        >
          {error}
        </Typography>
      )}
      {helperText && (
        <Typography
          variant="sm"
          customWeight="regular"
          className="mt-1.5 text-gray-500"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};
