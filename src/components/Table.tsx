import { useState } from "react";

interface TableProps<T> {
  data: T[];
  rowsPerPage?: number;
}

export function TableWithPagination<T extends {}>({
  data,
  rowsPerPage = 5,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const currentData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  function parseValue(value: unknown) {
    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "number") {
      return value;
    }

    if (value instanceof Date) {
      return value.toLocaleDateString();
    }

    return "";
  }

  return (
    <div>
      <table className="min-w-full bg-gray-700 text-white">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} className="py-2 px-4 capitalize border">
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {currentData &&
            currentData.map((winner, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(winner).map((value, valueIndex) => (
                  <td key={valueIndex} className="py-2 w-auto px-4 border">
                    {parseValue(value)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="rounded-md py-2 px-4 bg-gray-700 text-white"
        >
          Previous
        </button>
        <span>
          {currentPage + 1} of {pages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === pages - 1}
          className="rounded-md py-2 px-4 bg-gray-700 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
