import React from 'react';
import PropTypes from 'prop-types';
import TransactionStyles from 'styled-components';

const HeadOfTable = TransactionStyles.tr`
height: 50px;
background-color: blue;
color:white;
`;
const TransactionHistoryTable = TransactionStyles.table`
width: 600px;
`;
const Td = TransactionStyles.td`
text-transform: capitalize;
text-align: center;
height: 40px;
`;
const TdGray = TransactionStyles.td`
text-align: center;
background-color: gray;
height: 40px;
text-transform: capitalize;
`;
function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <HeadOfTable>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeadOfTable>
      </thead>
      {items.map((elem, i) => {
        if (i % 2 !== 0) {
          return (
            <tbody key={elem.id}>
              <tr>
                <TdGray>{elem.type}</TdGray>
                <TdGray>{elem.amount}</TdGray>
                <TdGray>{elem.currency}</TdGray>
              </tr>
            </tbody>
          );
        }
        return (
          <tbody key={elem.id}>
            <tr>
              <Td>{elem.type}</Td>
              <Td>{elem.amount}</Td>
              <Td>{elem.currency}</Td>
            </tr>
          </tbody>
        );
      })}
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
