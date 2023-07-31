import { useWinners } from '../hooks/useWinners'
import { TableWithPagination } from './Table';

export const WinnersPage = () => {
  const { winners } = useWinners();

  return (
    <div>
      <TableWithPagination data={winners} rowsPerPage={15} />
    </div>
  )
}