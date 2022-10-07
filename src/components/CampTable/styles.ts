import styled from "styled-components";

export const TableContainer = styled.aside`
  background-color: ${(props) => props.theme.black500};
  border: 1px solid ${(props) => props.theme.grey500};
  width: 20rem;
  border-radius: 8px;
  padding: 0.75rem;
`;

export const TableHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 1rem;

  h1 {
    font-family: "FreightSansProBlack", sans-serif;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.greenBrasileiraoA};
    color: black;
    padding: 0.3125rem 0.625rem;
    border-radius: 3px;
    display: inline-block;
    margin-top: 0.75rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  th {
    text-align: center;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.grey300};
    text-transform: uppercase;
    border-top: 1px solid ${(props) => props.theme.grey500};
    border-bottom: 1px solid ${(props) => props.theme.grey500};
    padding: 0.5rem 0;
  }

  td {
    font-size: 0.875rem;
  }
`;

export const TableClubeCell = styled.td`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  height: 50px;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const TableVariationCell = styled.td`
  svg {
    margin-left: 0.375rem;
    margin-right: 0.25rem;
  }

  span {
    margin-right: 0.375rem;
    color: ${(props) => props.theme.grey300};
    font-weight: 500;
  }
`;

export const TablePositionCell = styled.td`
  font-weight: 800;
  text-align: center;
`;

export const TableScoreCell = styled.td`
  font-weight: 800;
  text-align: center;
  width: 40px;
`;

export const TableLatestCell = styled.td``;

export const DotVictory = styled.span`
  &::before {
    margin: 0 0.125rem;
    content: "";
    display: inline-block;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 999px;
    background-color: #32df1e;
  }
`;

export const DotDerrota = styled.span`
  &::before {
    margin: 0 0.125rem;
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background-color: #df1e1e;
  }
`;

export const DotReg = styled.span`
  &::before {
    margin: 0 0.125rem;
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background-color: ${(props) => props.theme.grey500};
  }
`;
