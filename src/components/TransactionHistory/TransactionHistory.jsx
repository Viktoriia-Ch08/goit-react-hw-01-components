import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr>
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={css.tableRow}>{item.type}</td>
          <td className={css.tableRow}>{item.amount}</td>
          <td className={css.tableRow}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
