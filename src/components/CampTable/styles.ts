import styled from "styled-components";

export const TableContainer = styled.aside`
  background-color: ${props => props.theme.black500};
  border: 1px solid ${props => props.theme.grey500};
  width: 18.75rem;
  margin-top: 2rem;
  border-radius: 8px;
`

export const TableHeader = styled.header`
  text-align: center;
  padding: 1rem;

  h1 {
    font-family: 'FreightSansProBlack', sans-serif;
    text-transform: uppercase;
  }

  span {
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    background-color: ${props => props.theme.blueBrasileiraoA};
    padding: 0.3125rem 0.625rem;
    border-radius: 3px;
    display: inline-block;
    margin-top: 0.75rem;
  }
`

export const Table = styled.table`
  width: 100%;
  padding: 1rem;
  padding-top: 0;

  th {
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
    color: ${props => props.theme.grey300};
    text-transform: uppercase;
  }

  td {
    font-size: 0.875rem;
  }
`

export const TableCell = styled.td`
  display: flex;
  align-items: center;
`

export const TableClubeCell = styled(TableCell)`
  gap: 0.5rem;
  font-weight: 500;

  img {
      width: 1.5rem;
      height: 1.5rem;
    }
`

export const TablePositionCell = styled(TableCell)`
  font-weight: 800;
  padding: 0.5rem 0;
`