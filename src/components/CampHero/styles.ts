import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 11rem;
  padding: 1rem 0;
  background-color: ${props => props.theme.blueBrasileiraoA};
`

export const NavigationContainer = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;

  &::first-child {
    font-weight: 500;
  }
`

export const HeroTitle = styled.h1`
  width: 100%;
  font-family: 'FreightSansProBlack', sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: -1px;
`