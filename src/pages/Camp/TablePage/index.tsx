import { Link } from "react-router-dom";
import { useContext } from "react";

import { CampHero } from "../../../components/CampHero";
import { Header } from "../../../components/Header";
import {
  BrasileiraoContext,
  BrasileiraoContextProvider,
} from "../../../contexts/BrasileiraoContext";

import {
  GlobalContainer,
  HeadingPrimary,
  LinkButton,
} from "../../../styles/global";
import { HeadingThird, TablePageContainer } from "./styles";
import Skeleton from "react-loading-skeleton";

export function TablePage() {
  const { campInfo, isCampInfoLoading } = useContext(BrasileiraoContext);

  return (
    <BrasileiraoContextProvider>
      <Header />
      <CampHero />
      <GlobalContainer>
        <Link to={"/brasileirao"}>
          <LinkButton>Visão geral</LinkButton>
        </Link>
        <Link to={"#"}>
          <LinkButton active>Tabela</LinkButton>
        </Link>
        <Link to={"#"}>
          <LinkButton>Jogos</LinkButton>
        </Link>
        <Link to={"#"}>
          <LinkButton>Informações</LinkButton>
        </Link>
        <HeadingPrimary>Tabela de Classificação</HeadingPrimary>
        {isCampInfoLoading ? (
          <Skeleton />
        ) : (
          <HeadingThird>Número da Rodada</HeadingThird>
        )}
        <TablePageContainer>
          <thead>
            <tr>
              <th title="Posição">#</th>
              <th></th>
              <th>Clube</th>
              <th>Pontos</th>
              <th>Jogos</th>
              <th>Vitórias</th>
              <th>Empates</th>
              <th>Derrotas</th>
              <th>GP</th>
              <th>GC</th>
              <th>SG</th>
              <th title="Aproveitamento">%</th>
              <th>Últimos Jogos</th>
            </tr>
          </thead>
          <tbody></tbody>
        </TablePageContainer>
      </GlobalContainer>
    </BrasileiraoContextProvider>
  );
}
