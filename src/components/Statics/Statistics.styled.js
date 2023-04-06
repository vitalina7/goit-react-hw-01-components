import styled from 'styled-components';
export const Section = styled.section`
margin-top:15px;
  width: 500px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

export const Title = styled.div`
text-align: center;
font-size: 32px;
  color: #000000;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom:12px;
`

export const List = styled.ul`
width: 100%;
  height: 100%;
display:flex;
justify-content: space-between;
  padding: 0;
  margin: 0;
list-style: none;

`;

export const Item = styled.li`
 text-align: center;
 border-radius: 8px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
width:100%;
  bottom: 0;

  
`;

export const Label = styled.span`
 display: block;
  font-size: 18px;
  color: #000000;
  font-weight: 500;
`;
export const Percentage = styled.span`
display: block;
  font-size: 24px;
  color: #000000;
  font-weight: 700;
  margin-top: 5px;
`;