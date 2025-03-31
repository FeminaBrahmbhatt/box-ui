import React, { FC, useState } from "react";
import { StoryLayout } from "../StoryLayout";
import { Meta, StoryObj } from "@storybook/react";
import { PaginationProps } from "../@interfaces";
import {Paginate} from "../Paginate";

const meta: Meta<typeof Paginate> = {
  title: "Example/Pagination",
  component: Paginate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

interface Props extends PaginationProps {
  darkMode: boolean;
}

export const DesktopPagination: StoryObj<Props> = {
  args: {
    darkMode: false,
    totalPages: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
      <StoryLayout {...args}>
        <Paginate
          className=""
          isMobile={false}
          totalPages={args.totalPages}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </StoryLayout>
    );
  },
};

export const MobilePagination: StoryObj<Props> = {
  args: {
    darkMode: false,
    totalPages: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
      <StoryLayout {...args}>
        <Paginate
          className=""
          isMobile={true}
          totalPages={args.totalPages}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </StoryLayout>
    );
  },
};
