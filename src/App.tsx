import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import { CampHero } from "./components/CampHero";
import { CampTable } from "./components/CampTable";
import { Header } from "./components/Header";

import { GlobalContainer, GlobalStyle } from "./styles/global";
import { defautlTheme } from "./styles/themes/default";

const testKey = "test_678e568139d49f697686bcac73452d";

const options = {
  method: "GET",
  url: "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
  headers: { Authorization: `Bearer ${testKey}` },
};

export function App() {
  const [classification, setClassification] = useState<[]>([]);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setClassification(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ThemeProvider theme={defautlTheme}>
      <GlobalStyle />
      <Header />
      <CampHero />
      <GlobalContainer>
        <CampTable data={classification} />
      </GlobalContainer>
    </ThemeProvider>
  );
}
