import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};
export const transactionFromLS = () => {
  return localStorage.getItem("transaction")
    ? JSON.parse(localStorage.getItem("transaction"))
    : [];
};
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  useEffect(() => {
    reloadTransaction();
  }, []);

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const reloadTransaction = () => {
    dispatch({
      type: "RELOAD_TRANSACTION",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        reloadTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
