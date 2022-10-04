import {
  Table,
  TableClubeCell,
  TableContainer,
  TableHeader,
  TablePositionCell,
  TableRow,
} from "./styles";

interface CampTableProps {
  data: [];
}

export function CampTable({ data }: CampTableProps) {
  return (
    <TableContainer>
      <TableHeader>
        <h1>Classificação</h1>
        <span>Rodada 27</span>
      </TableHeader>
      <Table>
        <tbody>
          <tr>
            <th>#</th>
            <th></th>
            <th>Clube</th>
            <th>P</th>
            <th>Últimos</th>
          </tr>
          {data.map((data: any) => {
            return (
              <tr key={data.posicao}>
                <TablePositionCell>{data.posicao}</TablePositionCell>
                <td>{data.variacao_posicao}</td>
                <TableClubeCell>
                  <img src={data.time.escudo} />
                  {data.time.nome_popular}
                </TableClubeCell>
                <td>{data.pontos}</td>
                <td>{data.ultimos_jogos}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
}
