import React from "react";
import './pagination.css'
const Pagination = ({ currentPage, onPageChange, total, perPage }) => {
  const pages = Math.ceil(total / perPage);
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === pages;

  return (
    <div>
      <button className="nxt_prv"
        disabled={prevDisabled}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <span>
        {currentPage} of {pages}
      </span>
      <button className="nxt_prv"
        disabled={nextDisabled}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
