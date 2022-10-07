import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";

import {
  ClubContainer,
  GameContainer,
  PlacarContainer,
  ScoreContainer,
} from "./styles";
import { BrasileiraoContext } from "../../contexts/BrasileiraoContext";

interface CampTableData {
  title: string
}

export function CampGame({ title }: CampTableData) {
  const { score, isLoadingGames } = useContext(BrasileiraoContext);

  const timeGame = score.data_realizacao_iso;

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
          {isLoadingGames ? (
            <Skeleton
              circle
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
              height={"40px"}
            />
          ) : (
            <img src={score.time_mandante.escudo} />
          )}
          {isLoadingGames ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
            />
          ) : (
            <span>{score.time_mandante.sigla}</span>
          )}
        </ClubContainer>
        <PlacarContainer>
          {isLoadingGames ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"30px"}
              height={"50px"}
            />
          ) : (
            <h1>{score.placar_mandante}</h1>
          )}
          <span>X</span>
          {isLoadingGames ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"30px"}
              height={"50px"}
            />
          ) : (
            <h1>{score.placar_visitante}</h1>
          )}
        </PlacarContainer>
        <ClubContainer>
          {isLoadingGames ? (
            <Skeleton
              circle
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
              height={"40px"}
            />
          ) : (
            <img src={score.time_visitante.escudo} />
          )}
          {isLoadingGames ? (
            <Skeleton
              baseColor={"#171717"}
              highlightColor={"#1e1e1e"}
              width={"40px"}
            />
          ) : (
            <span>{score.time_visitante.sigla}</span>
          )}
        </ClubContainer>
      </ScoreContainer>
      <span>
        Encerrado{" "}
        {isLoadingGames ? (
          <Skeleton baseColor={"#171717"} highlightColor={"#1e1e1e"} inline />
        ) : (
          convertTime(timeGame)
        )}
      </span>
    </GameContainer>
  );
}
