import { Table } from "phosphor-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { TableContainer, TableHeader } from "./styles";

export function CampTableSkeleton() {
  return (
    <TableContainer>
      <TableHeader>
        <h1>Classificação</h1>
        <h3>
          <Skeleton baseColor="#0057FF" highlightColor="#71a0ff" width={70} />
        </h3>
      </TableHeader>
      <Skeleton height={25} count={21} baseColor={'#171717'} highlightColor={'#1e1e1e'} width={'100%'} />
    </TableContainer>
  );
}
