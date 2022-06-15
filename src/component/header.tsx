import React from "react";
import "../css/header.css";

export default function Header({title}:any) {
    let now = new Date();
    let nowYears = `${now.getFullYear()}`;
    let nowMonth = `${now.getMonth()}`;
    let nowDay = `${now.getDate()}`;
    if(nowMonth.length === 1) nowMonth = `0${nowMonth}`;
    if(nowDay.length === 1) nowDay = `0${nowDay}`; 
    let today = `${nowYears}${nowMonth}${nowDay}` ; 
    return (
        <div className="header">
            <img className="headerLeft headers" src={require('../img/test.png')} alt="logo"/>
            <h1 className="headerCenter headers">{title}</h1>
            <div className="headerRight headers">
                <div className="rightTop">
                <h4 className="rightContent">신청날짜</h4>
                    <span className="rightContent">{today}</span>
                </div>
            </div>
        </div>
    )
}

