import { CaretRight } from "phosphor-react";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import { BrasileiraoContext } from "../../contexts/BrasileiraoContext";

import { GlobalContainerFlex } from "../../styles/global";
import { HeroContainer, HeroTitle, NavigationContainer } from "./styles";

export function CampHero() {
  const { campInfo, isCampInfoLoading } = useContext(BrasileiraoContext)

  return (
    <HeroContainer>
      <GlobalContainerFlex>
        <NavigationContainer>
          <Link to={"/campeonatos"}>
            <span>Campeonatos</span>
          </Link>
          <CaretRight size={14} weight={"bold"} />
          {isCampInfoLoading ? <Skeleton baseColor="#c6ff01" highlightColor="#748f12" width={"200px"} /> : <span>{campInfo.nome}</span>}
        </NavigationContainer>
        {isCampInfoLoading ? <Skeleton baseColor="#c6ff01" highlightColor="#748f12" height={"4rem"} /> : <HeroTitle>{campInfo.nome_popular}</HeroTitle>}
      </GlobalContainerFlex>
    </HeroContainer>
  );
}
