import React from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-300"
      >
        Previous
      </button>
      <span className="flex items-center px-4 py-2 mx-1 text-gray-700">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
