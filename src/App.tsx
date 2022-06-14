import React from "react";
import "./css/App.css";
import Contract from "./screen/contract";
import ContractOne from "./screen/contractone";
import ContractTwo from "./screen/contracttwo";
import Estimate from "./screen/estimate";

const button = (e:any) => {
  e.target.style.display = "none";
  window.print();
  e.target.style.display = "inline-block";
}


export default function App() {
  return (
    <div>
      <div className="printPage">
        <Estimate />
      </div>
      <div className="printPage">
        <Contract />
      </div>
      <div className="printPage">
        <ContractOne />
      </div>
      <div className="printPage">
        <ContractTwo />
      </div>
      <div>
      <button onClick={button}>dsfsdfsd</button>
      </div>
    </div>
  )
}