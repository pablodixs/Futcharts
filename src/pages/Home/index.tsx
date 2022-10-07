import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";

import { GlobalContainer, HeadingPrimary } from "../../styles/global";

export function Home() {
  useEffect(() => {
    document.title = "Futcharts";
  }, []);

  return (
    <>
      <Header />
      <GlobalContainer>
        <Link to={"/brasileirao"}>
          <HeadingPrimary>
            Abra o menu campeonatos e clique em "Brasileirão Série A" ou clique
            aqui para visualizar a página do campeonato.
          </HeadingPrimary>
        </Link>
      </GlobalContainer>
    </>
  );
}
