import { CaretRight } from "phosphor-react";

import { GlobalContainerFlex } from "../../styles/global";
import { HeroContainer, HeroTitle, NavigationContainer } from "./styles";

export function CampHero() {
  return (
    <HeroContainer>
      <GlobalContainerFlex>
        <NavigationContainer>
          <span>Campeonatos</span>
          <CaretRight size={14} weight={"bold"} />
          <span>Brasileirão Série A</span>
        </NavigationContainer>
        <HeroTitle>Brasileirão Série A</HeroTitle>
      </GlobalContainerFlex>
    </HeroContainer>
  );
}
