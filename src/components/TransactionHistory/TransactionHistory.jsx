import PropTypes from "prop-types";
import  css from './TransactionHistory.module.css';
export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {items.map(t=> 
             <tr key={t.id}>
             <td>{t.type}</td>
             <td>{t.amount}</td>
             <td>{t.currency}</td>
           </tr>
            )}
    </tbody>
  </table>
}
TransactionHistory.propTypes = {
  t: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired})
  };