import React, { createContext, useState } from "react";
import { useContext } from "react";
import "./App.css";
import { Balance } from "./components/Balance/Balance";
import { Header } from "./components/Header/Header";
import History from "./components/History/History";
import { Transaction } from "./components/Transaction/Transaction";
import { db } from "./Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

export const AppContext = createContext(null);
const expenseArray = [],
  incomeArray = [];
const reducer = (acc, curr) => acc + curr;

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    let intAmount = parseInt(amount);
    console.log("success");

    try {
      addDoc(collection(db, "sample"), {
        amount: intAmount,
        text,
      });
    } catch (error) {
      console.log(error);
    }

    if (text === "" || amount === "") {
      alert("Invalid Text or Amount");
      return;
    }

    if (intAmount > 0) {
      setBalance(intAmount + balance);
      incomeArray.push(intAmount);
      setIncome(incomeArray.reduce(reducer));
    } else {
      setBalance(balance + intAmount);
      expenseArray.push(intAmount);
      setExpense(-expenseArray.reduce(reducer));
    }

    setHistory([...history, { text: text, amount: amount }]);
    setText("");
    setAmount("");
    alert("Transaction Added");
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          balance,
          income,
          expense,
          history,
          text,
          setText,
          amount,
          setAmount,
          handleSubmit,
        }}
      >
        <Header />
        <br></br>
        <Balance />
        <br></br>
        <History />
        <br></br>
        <Transaction />
      </AppContext.Provider>
    </div>
  );
}

export default App;
