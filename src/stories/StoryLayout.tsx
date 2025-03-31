import React from "react";
import classNames from "classnames";

export interface IStoryArgs {
  darkMode: boolean;
  className?: String;
  children?: React.ReactNode;
  noPadding?: String;
}

export const StoryLayout = (args: IStoryArgs) => (
  <div className={classNames({ "dark bg-gray-900": args.darkMode }, "-m-4")}>
    <div className={classNames(args.className, { "p-4": !args.noPadding })}>
      {args.children}
    </div>
  </div>
);
