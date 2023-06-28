import { transactionFromLS } from "./Context";

export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      let localTransaction = transactionFromLS();
      localTransaction = [action.payload, ...state.transactions];
      localStorage.setItem("transaction", JSON.stringify(localTransaction));

      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      break;
    case "DELETE_TRANSACTION":
      let localTransaction3 = transactionFromLS();
      localTransaction3 = localTransaction3.filter((localStorageItem) => {
        return action.payload != localStorageItem.id;
      });
      localStorage.setItem("transaction", JSON.stringify(localTransaction3));

      let Transactions = state.transactions.filter((item) => {
        return item.id != action.payload;
      });

      return {
        ...state,
        transactions: Transactions,
      };
      break;
    case "RELOAD_TRANSACTION":
      let localTransaction2 = transactionFromLS();
      return {
        ...state,
        transactions: localTransaction2,
      };
      break;
    default:
      break;
  }
};
