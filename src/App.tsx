import React from "react";
import "./css/App.css";
import Contract from "./screen/contract";
import ContractOne from "./screen/contractone";
import ContractTwo from "./screen/contracttwo";
import Estimate from "./screen/estimate";

const button = (e:any) => {
  window.print();
  /* e.target.style.display = "none";
  e.target.style.display = "inline-block"; */
  
  // window.open('com.cntti.cntti://expo-development-client/?url=http%3A%2F%2F172.30.1.19%3A8081');
  //location.href = 'com.cntti.cntti://expo-development-client/?url=http%3A%2F%2F172.30.1.19%3A8081';
}


export default function App() {
  return (
    <div>
      <div className="printPage">
        <Estimate />
      </div>
      {/* <div className="printPage">
        <Contract />
      </div>
      <div className="printPage">
        <ContractOne />
      </div>
      <div className="printPage">
        <ContractTwo />
      </div> */}
      <div>
      <button className="no-print" onClick={button}>프린트 버튼</button>
      </div>
    </div>
  )
}