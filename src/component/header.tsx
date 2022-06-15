import React from "react";
import "../css/header.css";

export default function Header({title}:any) {
    let now = new Date();
    let nowYears = `${now.getFullYear()}`;
    let nowMonth = `${now.getMonth()}`;
    let nowDay = `${now.getDate()}`;
    if(nowMonth.length === 1) nowMonth = `0${nowMonth}`;
    if(nowDay.length === 1) nowDay = `0${nowDay}`;
    let today = `${nowYears}.${nowMonth}.${nowDay}`;
    return (
        <div className="header">
            <img className="headerLeft" src={require('../img/test.png')} alt="logo"/>
            <h1 className="headerCenter">{title}</h1>
            <div className="headerRight">
                <div className="rightTop">
                    <h4 className="rightContent">작성날짜</h4>
                    <span className="rightContent">{today}</span>
                    <h4 className="rightContent">홈페이지</h4>
                    <span className="rightContent"><a href="https://www.devmonster.co.kr">https://www.devmonster.co.kr</a></span>
                </div>
            </div>
        </div>
    )
}