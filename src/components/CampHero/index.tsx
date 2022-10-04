import { CaretRight } from "phosphor-react";

import { GlobalContainerFlex } from "../../styles/global";
import { HeroContainer, HeroTitle, NavigationContainer } from "./styles";
interface DataTypes {
  data: {
    nome: string
    nome_popular: string
  },
}
export function CampHero({ data }: DataTypes) {
  return (
    <HeroContainer>
      <GlobalContainerFlex>
        <NavigationContainer>
          <span>Campeonatos</span>
          <CaretRight size={14} weight={"bold"} />
          <span>Campeonato Brasileiro Série A</span>
        </NavigationContainer>
        <HeroTitle>Brasileirão</HeroTitle>
      </GlobalContainerFlex>
    </HeroContainer>
  );
}
