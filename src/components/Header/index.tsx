import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  CampHighlight,
  CampLinkContainer,
  CampLinkListContainer,
  ClubLinkContainer,
  HeaderContainer,
  ImgHighlight,
  LinkCamps,
  LinkClubs,
  Logo,
  NavContent,
} from "./styles";

import cupLogo from "../../assets/cuplogo.png";
import { SquaresFour } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Página Inicial</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Campeonatos</NavigationMenu.Trigger>
            <NavContent>
              <CampLinkContainer>
                <CampHighlight>
                  <ImgHighlight src={cupLogo} />
                </CampHighlight>
                <CampLinkListContainer>
                  <LinkCamps href="#">
                    Brasileirão Série A
                    <ImgHighlight src="https://upload.wikimedia.org/wikipedia/pt/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png" />
                  </LinkCamps>
                  <LinkCamps href="#">
                    Champion's League
                    <img src="https://pnggrid.com/wp-content/uploads/2021/04/UEFA-Champions-League-Logo-PNG-White-1024x939.png" />
                  </LinkCamps>
                  <LinkCamps href="#">
                    Premier League
                    <img src="https://imagecache.365scores.com/image/upload/f_png,w_250,h_250,c_limit,q_auto:eco,d_Countries:Round:1.png/v2/Competitions/7" />
                  </LinkCamps>
                  <LinkCamps href="#">
                    Ver todos
                    <SquaresFour size={32} color="#f7f7f7" weight="duotone" />
                  </LinkCamps>
                </CampLinkListContainer>
              </CampLinkContainer>
            </NavContent>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Clubes</NavigationMenu.Trigger>
            <NavContent>
              <span>Clubes em destaque</span>
              <ClubLinkContainer>
                <LinkClubs href="#">
                  <img
                    src="https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg"
                    alt="Escudo Flamengo"
                  />
                  Flamengo
                </LinkClubs>
                <LinkClubs href="#">
                  <img
                    src="https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccdc1656.svg"
                    alt="Escudo São Paulo"
                  />
                  São Paulo
                </LinkClubs>
                <LinkClubs href="#">
                  <img
                    src="https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg"
                    alt="Escudo Corinthians"
                  />
                  Corinthians
                </LinkClubs>
                <LinkClubs href="#">
                  <img
                    src="https://upload.wikimedia.org/wikinews/en/a/a7/Paris_Saint-Germain_F.C..svg"
                    alt="Escudo PSG"
                  />
                  PSG
                </LinkClubs>
                <LinkClubs href="#">
                  <SquaresFour size={32} color="#f7f7f7" weight="duotone" />
                  Ver todos
                </LinkClubs>
              </ClubLinkContainer>
            </NavContent>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <Logo />
    </HeaderContainer>
  );
}
