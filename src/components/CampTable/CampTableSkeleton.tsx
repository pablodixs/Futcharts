import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { TableContainer, TableHeader } from "./styles";

export function CampTableSkeleton() {
  return (
    <TableContainer>
      <TableHeader>
        <h1>Classificação</h1>
        <h3>
          <Skeleton baseColor="#c6ff01" highlightColor="#748f12" width={70} />
        </h3>
      </TableHeader>
      <Skeleton
        height={25}
        count={21}
        baseColor={"#171717"}
        highlightColor={"#1e1e1e"}
        width={"100%"}
      />
    </TableContainer>
  );
}
