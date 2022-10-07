import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Skeleton from "react-loading-skeleton";

import {
  ClubContainer,
  GameContainer,
  PlacarContainer,
  ScoreContainer,
} from "./styles";

interface CampGameProps {
  title: string;
  data: any;
  isLoading: boolean;
}

export function CampGame({ title, data, isLoading }: CampGameProps) {
  const timeGame = data.data_realizacao_iso;

  function convertTime(date: Date) {
    if (date == undefined) {
      console.log("Invalid date");
    } else {
      const timeGameConverted = new Date(date);
      const converted = formatDistanceToNow(timeGameConverted, {
        locale: ptBR,
        addSuffix: true,
      });
      return converted;
    }
  }

  return (
    <GameContainer>
      <h1>{title}</h1>
      <ScoreContainer>
        <ClubContainer>
          {isLoading ? (
            <Skeleton
              circle
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
              height={"40px"}
            />
          ) : (
            <img src={data.time_mandante.escudo} />
          )}
          {isLoading ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
            />
          ) : (
            <span>{data.time_mandante.sigla}</span>
          )}
        </ClubContainer>
        <PlacarContainer>
          {isLoading ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"30px"}
              height={"50px"}
            />
          ) : (
            <h1>{data.placar_mandante}</h1>
          )}
          <span>X</span>
          {isLoading ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"30px"}
              height={"50px"}
            />
          ) : (
            <h1>{data.placar_visitante}</h1>
          )}
        </PlacarContainer>
        <ClubContainer>
          {isLoading ? (
            <Skeleton
              circle
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
              height={"40px"}
            />
          ) : (
            <img src={data.time_visitante.escudo} />
          )}
          {isLoading ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
            />
          ) : (
            <span>{data.time_visitante.sigla}</span>
          )}
        </ClubContainer>
      </ScoreContainer>
      <span>
        Encerrado{" "}
        {isLoading ? (
          <Skeleton baseColor={"#171717"} highlightColor={"#1e1e1e"} inline />
        ) : (
          convertTime(timeGame)
        )}
      </span>
    </GameContainer>
  );
}
