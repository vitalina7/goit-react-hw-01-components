import styled from 'styled-components';

export const Table = styled.table`
 width: 900px;
  border-collapse: collapse;
  border: 1px solid #ddd;
` 
 


export const Row = styled.th`
background-color: #00bfff;
  color: #444;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;

`;
export const RowInfo = styled.td`
padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
   
`;

export const Column = styled.tr`
  &:nth-child(even) {
    background-color: #f1f1f1;
  }`

  


