import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface BrasileiraoContextType {
  campInfo:
    | {
        nome: string;
        nome_popular: string;
      }
    | any;
  classification: {} | any;
  score: {} | any;
  isCampInfoLoading: boolean;
  isLoadingTable: boolean;
  isLoadingGames: boolean;
}

export const BrasileiraoContext = createContext({} as BrasileiraoContextType);

// CONFIGURAÇÃO API //////////////////////////////////////////////////////////////////

// CHAVES API
const testKey = "test_678e568139d49f697686bcac73452d";
const liveKey = "live_aa7308f8eebe2fdc46899635fea9ab";

// >>>>>>>>>>>>>>>>>> OPTIONS AXIOS <<<<<<<<<<<<<<<<<<<<<<

// OPTIONS INFORMAÇÕES DO CAMPEONATO
const getInfoCamp = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10",
  headers: { Authorization: `Bearer ${liveKey}` },
};

// OPTIONS DADOS DA TABELA DE CLASSIFICAÇÃO
const getTable = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
  headers: { Authorization: `Bearer ${liveKey}` },
};

// OPTIONS ÚLTIMOS JOGOS
const getGames = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/28",
  headers: { Authorization: `Bearer ${liveKey}` },
};

///////////////////////////////////////////////////////////////////////////////////////////

export function BrasileiraoContextProvider({ children }: any) {
  // >>>>>>>>>>>>>>> ESTADOS DAS INFORMAÇÕES DO CAMPEONATO BRASILEIRÃO <<<<<<<<<<<<<<<<<<<<
  const [campInfo, setCampInfo] = useState({});
  const [isCampInfoLoading, setIsCampInfoLoading] = useState(true);

  // >>>>>>>>>>>>> ESTADOS DA TABELA DE CLASSIFICAÇÃO DO CAMPEONATO BRASILEIRÃO <<<<<<<<<<<<
  const [classification, setClassification] = useState<[]>([]);
  const [isLoadingTable, setIsLoadingTable] = useState(true);

  // >>>>>>>>>>>>> ESTADOS DA TABELA DE CLASSIFICAÇÃO DO CAMPEONATO BRASILEIRÃO <<<<<<<<<<<<
  const [score, setScore] = useState<{}>({});
  const [isLoadingGames, setIsLoadingGames] = useState(true);

  // OBTÉM AS INFORMAÇÕES DO CAMPEONATO DA API /////////////////////////////////////////////
  async function getInfoAsync() {
    const data = await axios
      .request(getInfoCamp)
      .then((response) => {
        setCampInfo(response.data);
        setIsCampInfoLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getInfoAsync();
  }, []);

  // OBTÉM AS INFORMAÇÕES DA TABELA DE CLASSIFICAÇÃO DA API ///////////////////////////////
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

  // OBTÉM AS PARTIDAS DA API ////////////////////////////////////////////////////////////
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

  // -----------------------------------------------------------------------------

  return (
    <BrasileiraoContext.Provider
      value={{
        campInfo,
        isCampInfoLoading,
        classification,
        score,
        isLoadingGames,
        isLoadingTable,
      }}
    >
      {children}
    </BrasileiraoContext.Provider>
  );
}
