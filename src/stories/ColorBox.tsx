import React from "react";
import { IColor } from "./@interfaces";

export const ColorBox = ({ code, hex, bgClass }: IColor) => (
<div
    key={bgClass}
    className="flex flex-col rounded-lg shadow-lg w-26 h-39 dark:bg-white">
      <div className={`h-20 ${bgClass} rounded-t-lg`} />
      <div className="mx-3 my-3">
          {code}
          <br/>
          {hex}
      </div>
    </div>
);