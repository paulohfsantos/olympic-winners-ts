import { useWinners } from '../hooks/useWinners'
import { TableWithPagination } from './Table';

export const WinnersPage = () => {
  const { winners } = useWinners();

  return (
    <div>
      <header className="py-5 text-gray-300 text-3xl">
        Olympic Winners
      </header>
      <TableWithPagination data={winners} rowsPerPage={15} />
    </div>
  )
}