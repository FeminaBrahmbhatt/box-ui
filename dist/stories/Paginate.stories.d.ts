import { Meta, StoryObj } from "@storybook/react";
import { PaginationProps } from "../@interfaces";
import { Paginate } from "../Paginate";
declare const meta: Meta<typeof Paginate>;
export default meta;
interface Props extends PaginationProps {
    darkMode: boolean;
}
export declare const DesktopPagination: StoryObj<Props>;
export declare const MobilePagination: StoryObj<Props>;
//# sourceMappingURL=Paginate.stories.d.ts.map