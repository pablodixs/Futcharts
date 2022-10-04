import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import { CampHero } from "./components/CampHero";
import { CampTable } from "./components/CampTable";
import { Header } from "./components/Header";

import { CampContainerFlex, GlobalContainer, GlobalContainerFlex, GlobalStyle } from "./styles/global";
import { defautlTheme } from "./styles/themes/default";
import { CampTableSkeleton } from "./components/CampTable/CampTableSkeleton";
import { CampGame } from "./components/CampGames";

const testKey = "test_678e568139d49f697686bcac73452d";
const liveKey = "live_aa7308f8eebe2fdc46899635fea9ab";

const getInfoCamp = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10",
  headers: { Authorization: `Bearer ${testKey}` },
};

const getTable = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
  headers: { Authorization: `Bearer ${testKey}` },
};

const getGames = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/1",
  headers: { Authorization: `Bearer ${testKey}` },
};

export function App() {
  const [campInfo, setCampInfo] = useState<any>({});
  const [classification, setClassification] = useState<[]>([]);
  const [score, setScore] = useState<{}>({});
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .request(getInfoCamp)
      .then((response) => {
        console.log(response.data);
        setCampInfo(response.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .request(getTable)
      .then((response) => {
        console.log(response.data);
        setClassification(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .request(getGames)
      .then((response) => {
        setScore(response.data.partidas[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ThemeProvider theme={defautlTheme}>
      <GlobalStyle />
      <Header />
      <CampHero data={campInfo} />
      <GlobalContainer>
        <CampContainerFlex>
          {isLoading ? (
            <CampTableSkeleton />
          ) : (
            <CampTable data={classification} info={campInfo.rodada_atual}  />
          )}
          <CampGame title={'Próxima partida'} data={score} />
          <CampGame title={'Última partida'} data={score} />
        </CampContainerFlex>
      </GlobalContainer>
    </ThemeProvider>
  );
}
