import styled from 'styled-components';
export const List = styled.ul`
display:block;
margin-top:20px;
list-style: none;
`;

export const FriendItem = styled.li`
display:flex;
width:300px;
justify-content:center;
align-items:center;
border-radius: 8px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
bottom: 0;
margin-top:15px;
  `;

export const Image = styled.img`
border: 3px solid #7922CC;
  width: 115px;
  height: 115px;
`;

export const Name = styled.p`
margin-left:10px;
font-size: 24px;
  color: #000000;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  ${(props) =>
    props.isOnline
      ? "background-color: green;"
      : "background-color: red;"}
`;