import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled, { keyframes } from "styled-components";

import logoImage from "../../assets/logo.svg";

const scaleIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-20px); }
  to { 
    opacity: 1; 
    transform: translateY(0px);
  }
`;

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.black900};
  padding: 1.5rem;
  border-bottom: 1px solid #171717;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;

  *:hover {
    transition: all ease 150ms;
  }

  nav {
    position: absolute;
    left: 0;

    ul {
      list-style: none;

      li {
        display: inline-block;

        button {
          padding: 0.5rem 1rem;
          border-radius: 3px;
          border: none;
          font-weight: 550;
          font-size: 0.875rem;
          text-transform: uppercase;
          background-color: transparent;
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme.blueBrasileiraoA};
          }
        }
      }
    }
  }
`;

export const ClubLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CampLinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CampLinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CampHighlight = styled.div`
  width: 12.5rem;
  display: block;
  background: linear-gradient(
    310deg,
    rgba(98, 6, 27, 1) 0%,
    rgba(207, 15, 56, 1) 100%
  );
  border-radius: 3px;
  padding: 1rem;
`;

export const NavContent = styled(NavigationMenu.Content)`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #212121;
  background-color: ${(props) => props.theme.black900};
  position: absolute;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation: ${scaleIn} 150ms ease-in;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    font-family: "FreightSansProBlack", sans-serif;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
`;

export const LinkClubs = styled(NavigationMenu.Link)`
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.grey300};

  img {
    width: auto;
    height: 2.25rem;
    object-fit: cover;
  }

  &:hover {
    background-color: #202020;
  }
`;

export const LinkCamps = styled(NavigationMenu.Link)`
  width: 15rem;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;

  img {
    width: auto;
    height: 2.25rem;
    object-fit: cover;
  }

  &:hover {
    background-color: #202020;
  }
`;

export const ImgHighlight = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Logo = styled.div`
  background-image: url(${logoImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 9.375rem;
  height: 2rem;

  &:hover {
    opacity: 0.5;
  }
`;
