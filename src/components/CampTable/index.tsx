import { CaretDown, CaretUp, Minus } from "phosphor-react";

import {
  DotDerrota,
  DotReg,
  DotVictory,
  Table,
  TableClubeCell,
  TableContainer,
  TableHeader,
  TableLatestCell,
  TablePositionCell,
  TableScoreCell,
  TableVariationCell,
} from "./styles";

interface CampTableProps {
  data: [];
  info: {};
}

export function CampTable({ data, info }: CampTableProps) {
  return (
    <TableContainer>
      <TableHeader>
        <h1>Classificação</h1>
        <h3>{info.nome}</h3>
      </TableHeader>
      <Table>
        <tbody>
          <tr>
            <th title="Posição">#</th>
            <th></th>
            <th>Clube</th>
            <th title="Pontos">P</th>
            <th title="Últimos Jogos">U. Jogos</th>
          </tr>
          {data.map((data: any) => {
            return (
              <tr key={data.posicao}>
                <TablePositionCell>{data.posicao}</TablePositionCell>
                <TableVariationCell>
                  {(() => {
                    if (data.variacao_posicao > 0) {
                      return (
                        <>
                          <CaretUp size={12} weight={"bold"} color={"#32DF1E"} />
                          <span>+{data.variacao_posicao}</span>
                        </>
                      );
                    } else if (data.variacao_posicao < 0) {
                      return (
                        <>
                          <CaretDown size={12} weight="bold" color={"#DF1E1E"} />
                          <span>{data.variacao_posicao}</span>
                        </>
                      );
                    } else if (data.variacao_posicao == 0) {
                      return <Minus size={12} weight="bold" color={"#2E2E2E"} />;
                    }
                  })()}
                </TableVariationCell>
                <TableClubeCell>
                  <img src={data.time.escudo} />
                  {data.time.nome_popular}
                </TableClubeCell>
                <TableScoreCell>{data.pontos}</TableScoreCell>
                <TableLatestCell>
                  {data.ultimos_jogos.map((data: any) => {
                    if (data.includes("v")) {
                      return <DotVictory />;
                    } else if (data.includes("d")) {
                      return <DotDerrota />;
                    } else {
                      return <DotReg />;
                    }
                  })}
                </TableLatestCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
}
