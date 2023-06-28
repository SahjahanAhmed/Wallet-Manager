import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Context";

import "./IncomeExpense.css";
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  let positive = transactions.filter((transaction) => {
    return transaction.amount >= 0;
  });
  let nagetive = transactions.filter((transaction) => {
    return transaction.amount < 0;
  });

  const income = positive.reduce((old, item) => {
    return old + item.amount;
  }, 0);
  const expense = nagetive.reduce((old, item) => {
    return old + item.amount;
  }, 0);

  return (
    <div className="income-expense">
      <div className="income">
        <h5>INCOME</h5>
        <h5 className="money" style={{ alignSelf: "self-start" }}>
          ${income.toFixed(2)}
        </h5>
      </div>
      <div className="expense">
        <h5>EXPENSE</h5>
        <h5 className="money" style={{ alignSelf: "self-start" }}>
          {expense != 0
            ? "-$" + Math.abs(expense).toFixed(2)
            : "$" + Math.abs(expense).toFixed(2)}{" "}
        </h5>
      </div>
    </div>
  );
};

export default IncomeExpense;
