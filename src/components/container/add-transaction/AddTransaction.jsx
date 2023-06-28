import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/Context";

import "./AddTransaction.css";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  return (
    <div className="add-transaction">
      <h3>Add new transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const NewTransaction = {
            text: text,
            amount: amount,
            id: Math.floor(Math.random() * 1000000000),
          };
          addTransaction(NewTransaction);
          setText("");
          setAmount("");
        }}
      >
        <div>
          <div>
            <label htmlFor="text">Text</label>
            <input
              value={text}
              id="text"
              type="text"
              placeholder="enter text..."
              onChange={(e) => setText(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="amount">
              Amount{" "}
              <small style={{ opacity: ".8" }}>
                (put - first if it expense)
              </small>
            </label>
            <input
              value={amount}
              id="amount"
              type="number"
              placeholder="enter amount..."
              onChange={(e) => setAmount(parseInt(e.target.value))}
              required
              autoComplete="off"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
