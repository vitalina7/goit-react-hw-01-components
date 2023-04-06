import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title, List,Label,Percentage, Item, } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <Item className="item" key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

 function getRandomColor() {
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return color;
  }