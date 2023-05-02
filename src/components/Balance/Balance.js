import { React, useContext } from "react";
import { AppContext } from "../../App";
import "./Balance.css"

export const Balance = () => {
  const { balance, income, expense } = useContext(AppContext);

  return (
    <div className="balance">
      <div className="balance__container">
        <p className="balance__header">Balance</p>
        <p>Your Balance : Rs . {balance}</p>
        <p>Income : Rs . {income}</p>
        <p>Expense : Rs . {expense}</p>
      </div>
    </div>
  );
};
