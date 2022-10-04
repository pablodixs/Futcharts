import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import { CampHero } from "./components/CampHero";
import { CampTable } from "./components/CampTable";
import { Header } from "./components/Header";

import {
  CampContainerFlex,
  GlobalContainer,
  GlobalContainerFlex,
  GlobalStyle,
} from "./styles/global";
import { defautlTheme } from "./styles/theme";
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
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/28",
  headers: { Authorization: `Bearer ${testKey}` },
};

export function App() {
  const [campInfo, setCampInfo] = useState<any>({});
  const [classification, setClassification] = useState<[]>([]);
  const [score, setScore] = useState<{}>({});

  const [isLoadingInfo, setIsLoadingInfo] = useState(true);
  const [isLoadingTable, setIsLoadingTable] = useState(true);
  const [isLoadingGames, setIsLoadingGames] = useState(true);

  async function getInfoAsync() {
    const data = await axios
      .request(getInfoCamp)
      .then((response) => {
        setCampInfo(response.data);
        setIsLoadingInfo(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getInfoAsync();
  }, []);

  async function getTablesAsync() {
    const data = await axios
      .request(getTable)
      .then((response) => {
        setClassification(response.data);
        setIsLoadingTable(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getTablesAsync();
  }, []);

  async function getGamesAsync() {
    const data = await axios
      .request(getGames)
      .then((response) => {
        setScore(response.data.partidas[0]);
        setIsLoadingGames(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getGamesAsync();
  }, []);

  return (
    <ThemeProvider theme={defautlTheme}>
      <GlobalStyle />
      <Header />
      <CampHero data={campInfo} />
      <GlobalContainer>
        <CampContainerFlex>
          {isLoadingTable ? (
            <CampTableSkeleton />
          ) : (
            <CampTable
              data={classification}
              info={campInfo.rodada_atual}
              isLoading={isLoadingTable}
            />
          )}
          <CampGame
            title={"Próxima partida"}
            data={score}
            isLoading={isLoadingGames}
          />
          <CampGame
            title={"Última partida"}
            data={score}
            isLoading={isLoadingGames}
          />
        </CampContainerFlex>
      </GlobalContainer>
    </ThemeProvider>
  );
}
