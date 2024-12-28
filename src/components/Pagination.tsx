import React from 'react';

interface PaginationProps {
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onNext, onPrevious }) => {
  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
