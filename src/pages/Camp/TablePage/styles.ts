import styled from "styled-components";

export const TablePageContainer = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 1rem auto;

  thead {
    border-bottom: 2px solid ${props => props.theme.black500};
    border-radius: 8px;

    tr {
      

      th {
        padding: .5rem 0rem;
        color: ${props => props.theme.grey300};
      }
    }
  }
`

export const HeadingThird = styled.span`
  text-transform: uppercase;
  text-align: center;
  display: block;
  width: 9rem;
  padding: 0.25rem;
  border-radius: 3px;
  margin: .5rem auto;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${props => props.theme.grey500};
`