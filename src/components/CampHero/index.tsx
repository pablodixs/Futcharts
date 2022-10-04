import { CaretRight } from "phosphor-react";

import { GlobalContainerFlex } from "../../styles/global";
import { HeroContainer, HeroTitle, NavigationContainer } from "./styles";
interface DataTypes {
  data: {
    nome: string
    nome_popular: string
  }
}
export function CampHero({ data }: DataTypes) {
  return (
    <HeroContainer>
      <GlobalContainerFlex>
        <NavigationContainer>
          <span>Campeonatos</span>
          <CaretRight size={14} weight={"bold"} />
          <span>{data.nome}</span>
        </NavigationContainer>
        <HeroTitle>{data.nome_popular}</HeroTitle>
      </GlobalContainerFlex>
    </HeroContainer>
  );
}
