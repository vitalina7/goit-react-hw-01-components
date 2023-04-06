import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid #7922CC;
  width: 115px;
  height: 115px;
`;

export const Name = styled.p`
  margin-top: 10px;
  font-size: 32px;
  color: #000000;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.p`
  font-size: 24px;
  color: #808080;
  font-weight: 500;
`;

export const Stats = styled.ul`
  width: 100%;
  height: 100%;
display:flex;
justify-content: space-between;
  padding: 0;
  margin: 0;
list-style: none;
`

export const StatItem = styled.li`
  text-align: center;
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 18px;
  color: #808080;
  font-weight: 500;
`;

export const StatQuantity = styled.span`
  display: block;
  font-size: 24px;
  color: #000000;
  font-weight: 700;
  margin-top: 5px;
`;