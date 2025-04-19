import React from "react";
import { PaginationProps } from "./@interfaces";
import classNames from "classnames";
import { Pagination } from "react-headless-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const Paginate = ({
  totalPages,
  page,
  isMobile,
  className,
  setPage,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const ArrowLeft = FiArrowLeft as React.FC<any>;
  const ArrowRight = FiArrowRight as React.FC<any>;

  if (isMobile) {
    return (
      <div className={classNames("flex w-full h-10 items-center", className)}>
        <ArrowLeft
          data-testid="prevBtn"
          size={20}
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          })}
          onClick={() => {
            if (page > 0) {
              handlePageChange(page - 1);
            }
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white">
          {`Page ${page} of ${totalPages}`}
        </div>
        <ArrowRight
          data-testid="nextBtn"
          size={20}
          className={classNames("ml-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== totalPages - 1,
            "opacity-50": page === totalPages - 1,
          })}
          onClick={() => {
            if (page < totalPages - 1) {
              handlePageChange(page + 1);
            }
          }}
        />
      </div>
    );
  }

  return (
    <Pagination
      className={classNames(
        "flex w-full items-center h-10 text-sm select-none",
        className
      )}
      currentPage={page}
      totalPages={totalPages}
      edgePageCount={2}
      setCurrentPage={handlePageChange}
      truncableText="..."
      middlePagesSiblingCount={2}
      truncableClassName="w-10 px-0.5 text-center dark:text-gray-500"
    >
      <Pagination.PrevButton
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          }
        )}
      >
        <ArrowLeft size={20} className={classNames("mr-3")} />
        Previous
      </Pagination.PrevButton>
      <div className="flex items-center justify-center flex-grow list-none">
        <Pagination.PageButton
          activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white"
          inactiveClassName="text-gray-500"
          className="flex items-center justify-center h-10 w-10 rounded-full cursor-pointer font-medium"
        />
      </div>
      <Pagination.NextButton
        className={classNames(
          "h-10 font-medium flex items-center mr-2 text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page !== totalPages - 1,
            "opacity-50": page === totalPages - 1,
          }
        )}
      >
        Next
        <ArrowRight size={20} className={classNames("ml-3")} />
      </Pagination.NextButton>
    </Pagination>
  );
};
