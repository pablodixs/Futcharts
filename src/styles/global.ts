import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: white;
    font-family: 'Supreme', sans-serif;
  }

  body {
    background-color: ${props => props.theme.black900};
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }
`

export const GlobalContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

export const GlobalContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`