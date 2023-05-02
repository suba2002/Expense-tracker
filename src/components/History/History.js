import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./History.css"
function History() {
  const {history}=useContext(AppContext);

  return (
  <div className="history">
    <div className="history__container">
    <p>History</p>
    <div className="history__value">
    {history.map((e,i)=>(
      <div key={i} className={parseInt(e.amount)>0?"border-green":"border-red"} >
        {e.text} {e.amount}
      </div>
    ))}
  </div>
  </div>
  </div>
  )
}
export default History;
