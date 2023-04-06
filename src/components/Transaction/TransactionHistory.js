import React from 'react';
import PropTypes from 'prop-types';
import { Table,Row,RowInfo,Column } from './Transaction.styled';
export const Transaction = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Row>Type</Row>
          <Row>Amount</Row>
          <Row>Currency</Row>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Column key={id}>
            <RowInfo>{type}</RowInfo>
            <RowInfo>{amount}</RowInfo>
            <RowInfo>{currency}</RowInfo>
          </Column>
        ))}
      </tbody>
    </Table>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
