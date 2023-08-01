import { useEffect, useState } from "react";

interface TableProps<T> {
  data: T[];
  rowsPerPage?: number;
}

export function TableWithPagination<T extends NonNullable<unknown>>({
  data,
  rowsPerPage = 5,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(data.length / rowsPerPage);
  const [jumpToPage, setJumpToPage] = useState(currentPage + 1);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setJumpToPage(currentPage);
    }
  };

  const handleNext = () => {
    if (currentPage < pages - 1) {
      setCurrentPage((prev) => prev + 1);
      setJumpToPage(currentPage + 2);
    }
  };

  const currentData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage,
  );

  function parseValue(value: unknown) {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    } else if (value instanceof Date) {
      return value.toLocaleDateString();
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const value = Number(jumpToPage);

      if (value > 0 && value <= pages) {
        setCurrentPage(value - 1);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [jumpToPage]);

  return (
    <div>
      <table className="min-w-full bg-slate-900 text-white">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  className="border border-blue-700 px-4 py-2 capitalize"
                >
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
                  <td
                    key={valueIndex}
                    className="w-auto border border-blue-700 px-4 py-2"
                  >
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
          className="rounded-md bg-gray-700 px-4 py-2 text-white transition-all hover:bg-blue-950"
        >
          {"<"} Previous
        </button>
        <span className="rounded-md bg-slate-700 px-4 py-2">
          <input
            type="text"
            className="mr-2 w-24 rounded bg-slate-800 px-4 py-2 text-center text-blue-200"
            value={jumpToPage}
            onInput={(e) => setJumpToPage(+e.currentTarget.value)}
            min={1}
            max={pages}
          />
          of {pages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === pages - 1}
          className="rounded-md bg-gray-700 px-4 py-2 text-white transition-all hover:bg-blue-950"
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}
