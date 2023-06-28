import React, { useRef, useContext } from "react";
import { GlobalContext } from "../../../context/Context";

import "./Transaction.css";
const Transaction = ({ transaction }) => {
  const deleteBtnRef = useRef();
  const showDeleteBtn = () => {
    deleteBtnRef.current.style.left = "-2px";
  };
  const hideDeleteBtn = () => {
    deleteBtnRef.current.style.left = "-20px";
  };

  const context = useContext(GlobalContext);
  const deleteTransaction = (e) => {
    let selecteditem = e.target.parentElement;
    context.deleteTransaction(selecteditem.id);
  };
  return (
    <>
      <li
        className={
          transaction.amount < 0 ? "transaction minus" : "transaction plus"
        }
        onMouseEnter={showDeleteBtn}
        onMouseLeave={hideDeleteBtn}
        id={transaction.id}
      >
        <span className="text">{transaction.text}</span>
        <span className="amount">
          {transaction.amount < 0
            ? "-$" + Math.abs(transaction.amount).toFixed(2)
            : "$" + Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button
          className="delete-transaction"
          ref={deleteBtnRef}
          onClick={deleteTransaction}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
