import React, { useState } from "react";
import type { Winner } from "../types/winner";

interface TableProps {
  data: Winner[];
  rowsPerPage?: number;
}

export const TableWithPagination: React.FC<TableProps> = ({ data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(data.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const currentData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div>
      <table className="min-w-full bg-white text-blue-700">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map(key => (
              <th key={key} className="py-2 px-4 border capitalize">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData && currentData.map((winner, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(winner).map((value, valueIndex) => (
                <td key={valueIndex} className="py-2 px-4 border">
                  {value instanceof Date ? value.toLocaleDateString() : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button onClick={handlePrevious} disabled={currentPage === 0} className="py-2 px-4 bg-blue-500 text-white">
          Previous
        </button>
        <span>{currentPage + 1} of {pages}</span>
        <button onClick={handleNext} disabled={currentPage === pages - 1} className="py-2 px-4 bg-blue-500 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

