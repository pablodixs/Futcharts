import { Link } from "react-router-dom";
import { useContext } from "react";

// ESTILOS
import {
  CampContainerFlex,
  GlobalContainer,
  GlobalStyle,
  LinkButton,
} from "../../styles/global";

// COMPONENTES
import { CampTableSkeleton } from "../../components/CampTable/CampTableSkeleton";
import { CampGame } from "../../components/CampGames";
import { CampTable } from "../../components/CampTable";
import { Header } from "../../components/Header";
import { CampHero } from "../../components/CampHero";
import {
  BrasileiraoContext,
  BrasileiraoContextProvider,
} from "../../contexts/BrasileiraoContext";

export function Camp() {
  const {
    campInfo,
    classification,
    isCampInfoLoading,
    isLoadingGames,
    isLoadingTable,
  } = useContext(BrasileiraoContext);

  return (
    <BrasileiraoContextProvider>
      <GlobalStyle />
      <Header />
      <CampHero />
      <GlobalContainer>
        <Link to={""}>
          <LinkButton active>Visão geral</LinkButton>
        </Link>
        <Link to={"tabela"}>
          <LinkButton>Tabela</LinkButton>
        </Link>
        <Link to={"#"}>
          <LinkButton>Jogos</LinkButton>
        </Link>
        <Link to={"#"}>
          <LinkButton>Informações</LinkButton>
        </Link>
        <CampContainerFlex>
          {isLoadingTable ? (
            <CampTableSkeleton />
          ) : (
            <CampTable />
          )}
          <CampGame
            title={"Próxima partida"}
          />
        </CampContainerFlex>
      </GlobalContainer>
    </BrasileiraoContextProvider>
  );
}
