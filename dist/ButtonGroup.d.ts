import React from "react";
import { IButtonItem } from "./@interfaces";
export interface ButtonGroupProps {
    options: IButtonItem[];
    activeOption: string;
    setActiveOption: (activeOption: string) => void;
}
export declare const ButtonGroup: ({ options, activeOption, setActiveOption, }: ButtonGroupProps) => React.JSX.Element;
//# sourceMappingURL=ButtonGroup.d.ts.map