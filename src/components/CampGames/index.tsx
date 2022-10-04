import { ClubContainer, GameContainer, PlacarContainer, ScoreContainer } from "./styles";
import { format, formatDistanceToNow, formatISO9075 } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CampGameProps {
  title: string;
  data: any;
}

export function CampGame({ title, data }: CampGameProps) {
  const timeGame = data.data_realizacao_iso
  const timeGameConverted = new Date(timeGame)

  console.log(timeGameConverted)

  const formatedTime = formatDistanceToNow(timeGameConverted, { locale: ptBR, addSuffix: true });

  console.log(formatedTime)

  console.log(data);
  return (
    <GameContainer>
      <h1>{title}</h1>
      <ScoreContainer>
        <ClubContainer>
          <img src={data.time_mandante.escudo} />
          <span>{data.time_mandante.sigla}</span>
        </ClubContainer>
        <PlacarContainer>
          <h1>{data.placar_mandante}</h1>
          <span>X</span>
          <h1>{data.placar_visitante}</h1>
        </PlacarContainer>
        <ClubContainer>
          <img src={data.time_visitante.escudo} />
          <span>{data.time_visitante.sigla}</span>
        </ClubContainer>
      </ScoreContainer>
      <h3>Encerrado {formatedTime}</h3>
    </GameContainer>
  );
}
