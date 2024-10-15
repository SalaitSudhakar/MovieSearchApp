import { useState } from "react";

const Pagination = ({ totalPages, curPage, handlePageChange }) => {
    
    return (
      <div className="mt-8 pb-8 flex justify-center">
        <button
          onClick={() => handlePageChange(curPage - 1)}
          disabled={curPage === 1}
          className="bg-blue-900 text-white p-2 rounded-l-md hover:bg-blue-700"
        >
          Previous
        </button>
        <span className="bg-gray-300 p-2 border">{curPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(curPage + 1)}
          disabled={curPage === totalPages}
          className="bg-blue-900 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  