import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./Transaction.css";
import { db } from "../../Firebase";

export const Transaction = () => {
  const { text, setText, amount, setAmount, handleSubmit }=useContext(AppContext);

  return (
    <div className="transaction">
      <div className="transaction__container">
        <div className="transaction__header">
        <p>Add Transaction</p>
      </div>
      <div className="transaction__text">
        <p>Text :</p>
        <input
          type="text"
          placeholder="Enter Text "
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="transaction__amount">
        <p>Amount :</p>
        <p className="transaction__hint">[negative-expense,positive-income]</p>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleSubmit} >Submit</button>
      </div>
      </div>
    </div>
  );
};
