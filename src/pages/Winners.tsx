import { TableWithPagination } from "../components/Table";
import { useWinners } from "../hooks/useWinners";

export const WinnersPage = () => {
  const { winners } = useWinners();

  return (
    <div>
      <header className="py-5 font-bold text-gray-300 text-3xl">
        Olympic Winners
      </header>
      <TableWithPagination data={winners} rowsPerPage={15} />
    </div>
  );
};
