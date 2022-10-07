import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface BrasileiraoContextType {
  campInfo:
    | {
        nome: string;
        nome_popular: string;
      }
    | any;
  isCampInfoLoading: boolean;
}

export const BrasileiraoContext = createContext({} as BrasileiraoContextType);

const testKey = "test_678e568139d49f697686bcac73452d";
const liveKey = "live_aa7308f8eebe2fdc46899635fea9ab";

const getInfoCamp = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10",
  headers: { Authorization: `Bearer ${testKey}` },
};

export function BrasileiraoContextProvider({ children }: any) {
  const [campInfo, setCampInfo] = useState({});
  const [isCampInfoLoading, setIsCampInfoLoading] = useState(true);

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

  return (
    <BrasileiraoContext.Provider value={{ campInfo, isCampInfoLoading }}>
      {children}
    </BrasileiraoContext.Provider>
  );
}
