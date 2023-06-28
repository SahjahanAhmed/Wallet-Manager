import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Context";
import Transaction from "../transaction/Transaction";

import "./TransactionList.css";
const TransactionList = () => {
  let { transactions, reloadTransaction } = useContext(GlobalContext);
  return (
    <div className="transaction-list">
      <h3 className="history">History</h3>
      {transactions.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "13px" }}>Empty!</p>
      ) : (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
