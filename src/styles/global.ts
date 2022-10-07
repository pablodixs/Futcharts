import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Supreme', sans-serif;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #101010;
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }
`;

export const GlobalContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const GlobalContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const CampContainerFlex = styled.main`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

interface LinkButtonTypes {
  primary?: boolean
  active?: boolean
}

export const LinkButton = styled.button<LinkButtonTypes>`
  border: none;
  padding: .5rem 1rem; 
  background-color: ${props => props.active ? props.theme.grey500 : props.theme.black500 };
  border-radius: 3px;
  margin-right: 1rem;
  transition: all ease 150ms;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.grey500 };
  }
`

export const HeadingPrimary = styled.h1`
  font-family: 'FreightSansProBlack', 'Supreme', sans-serif;
  text-transform: uppercase;
  margin-top: 1rem;
  text-align: center;
`