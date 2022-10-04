import styled from "styled-components";

export const GameContainer = styled.div`
  background-color: ${props => props.theme.black500};
  border: 1px solid ${props => props.theme.grey500};
  width: 20rem;
  height: 12.5rem;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-family: 'FreightSansProBlack', sans-serif;
    text-transform: uppercase;
    color: ${props => props.theme.grey300};
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ClubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: 'FreightSansProBlack', sans-serif;
  }

  img {
    width: 3rem;
  }
`

export const PlacarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  span {
    font-weight: 700;
    color: ${props => props.theme.grey300};
  }

  h1 {
    font-family: 'Supreme', sans-serif;
    font-size: 3rem;
    color: white;
    margin: .5rem;
  }
`