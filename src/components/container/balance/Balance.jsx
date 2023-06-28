import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Context";

import "./Balance.css";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce((old, item) => {
    return old + item.amount;
  }, 0);
  return (
    <div className="balance">
      <h4>Your balance</h4>
      <h1 className="balance-amount">
        {balance >= 0
          ? "$" + balance.toFixed(2)
          : "-" + "$" + Math.abs(balance.toFixed(2))}
      </h1>
    </div>
  );
};
