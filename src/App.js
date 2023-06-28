import Header from "./components/header/Header";

import { Balance } from "./components/container/balance/Balance";
import IncomeExpense from "./components/container/income-expense/IncomeExpense";
import TransactionList from "./components/container/transaction-list/TransactionList";
import AddTransaction from "./components/container/add-transaction/AddTransaction";
import GlobalProvider from "./context/Context";
import "./App.css";
import "./utils.css";
import { useEffect } from "react";
import Theme from "./components/theme/Theme";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <GlobalProvider>
      <Profile />
      <Theme />
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
export default App;
