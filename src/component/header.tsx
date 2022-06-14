import React from "react";
import "../css/header.css";

export default function Header({title}:any) {
    return (
        <div className="header">
            <img className="headerLeft headers" src={require('../img/test.png')} alt="logo"/>
            <h1 className="headerCenter headers">{title}</h1>
            <div className="headerRight headers">
                <div className="rightTop">
                <h4 className="rightContent">신청날짜</h4>
                    <span className="rightContent">20220101</span>
                </div>
            </div>
        </div>
    )
}

