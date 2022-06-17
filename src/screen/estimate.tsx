import React, { useState } from "react";
import Header from "../component/header";
import "../css/estimate.css";
import { regex } from '../component/regex';

export default function Estimate() {

    const valueOnChange = (ch:any, index:number,value:any,set:any) => {
        const newContent = [...value];
        newContent[index].content = ch;
        set(newContent);
    };

    const [firstLines, setFirstLines] = useState([
        {firstTitle : "To.", content: "미림미디어랩"},
        {firstTitle : "프로젝트 명", content: "LMS 크로스플랫폼 앱 Front end 개발"},
        {firstTitle : "견적 담당자", content: "김수홍 대표이사"},
        {firstTitle : "연락처", content: "010.5604.4147"},
        {firstTitle : "Email", content: "aldegad@devmonster.co.kr"},
        {firstTitle : "주소", content: "경기도 성남시 분당구 황새울로 200번길 28 오너스타워 701호"}
    ]);
    
    const [secondLines, setSecondLines] = useState([
        {secondTitle: "개발범위", content: "AOS Front-end, iOS Front-end"},
        {secondTitle: "제작시스템", content: "Front-end: ionic angular"},
        {secondTitle: "결제방식", content: "선금 30% / 중도금 30% / 잔금 40%"},
        {secondTitle: "개발툴", content: "Visual Studio Code"}
    ]);

    const [thirdLinesFirstCategory, setThirdLinesFirstCategory] = useState([
        {  
            title : "1번",
            content : [
                {thirdTitle:"타이틀", thirdPeriod:3.0, thirdPersonnel:"ㄴㄹㄴㄹㄴㅇㄹ", thirdUnitPrice:5000, thirdAmount:5000},
            ]
        },
    ]);

    const fourList = [
        "기간은 Calendar Day를 기준으로 산정되었습니다.",
        "보여주신 부분에서, 결재는 포함되고, 포인트는 빠진 것을 기준으로 견적이 작성되었습니다."
    ]

    const [correctBool, setCorrectBool] = useState(false);
    
    const correctButton = () => {
        setCorrectBool(!correctBool);
    }
    return (
        <div className="estimate">
            <Header title="견적서"/>
            <button style={{position:"absolute", top:'45mm', left:'73.3mm'}} onClick={correctButton}>{correctBool ? "수정 완료" : "수정 하기"}</button>
            {/* 첫번째 */}
            <div className="estimateContent1">
                <div className="boundaryLine">
                    {firstLines.map((v,i)=>{
                        return (
                            <div key={i} className="line">
                                <div key={v.firstTitle} className="firstLineTitle">{v.firstTitle}</div>
                                {/* {correctBool ? <input type={"text"} className="firstLineContent" value={v.content} onChange={(e) => valueOnChange(e.target.value,i,firstLines,setFirstLines)} />  : <div key={v.content} className="firstLineContent">{v.content}</div> } */}
                                <div key={v.content} className="firstLineContent">{v.content}</div>
                            </div>     
                        )
                    })}
                </div>
            </div>
            {/* 두번째 */}
            <div className="estimateContent2">
                    {secondLines.map((v,i)=>{
                        return (
                            <div key={i} className="line">
                                <div key={v.secondTitle} className="firstLineTitle">{v.secondTitle}</div>
                                {/* {correctBool ? <input type={"text"} className="firstLineContent" value={v.content} onChange={(e) => valueOnChange(e.target.value,i,secondLines,setSecondLines)} /> : <div key={v.content} className="firstLineContent">{v.content}</div>} */}
                                <div key={v.content} className="firstLineContent">{v.content}</div>
                            </div>   
                        )
                    })}
            </div>

            {/* 세번째 */}
            <div className="estimateContent3">
                {/* {correctBool ? <button style={{position:"absolute", right:'56mm'}} onClick={()=>{}}>추가하기</button> : null} */}
                <ul className="boundaryLineThreeHead">
                    <li className="boundaryLineThreeList1">내용</li>
                    <li className="boundaryLineThreeList">기간</li>
                    <li className="boundaryLineThreeList">금액</li>
                </ul>      
                {thirdLinesFirstCategory.map((v)=>{
                    return (
                        <div>
                            {/* <input type={"text"} /> */}
                            <div className="lineThree">{v.title}</div>
                                {v.content.map((vv,i) => {
                                    return (
                                        <ul key={i} className="lineThreeList">
                                            <li key={vv.thirdTitle} className="lineThreeFirst">{vv.thirdTitle}</li>
                                            <li key={vv.thirdPeriod} className="lineThreeContent">{Number(vv.thirdPeriod).toFixed(1)}</li>
                                            <li key={vv.thirdAmount} className="lineThreeContent">{regex.replace.price(vv.thirdAmount)}</li>
                                        </ul> 
                                    )
                                })}
                                {/* {correctBool ? <button>+</button> : null} */}
                        </div>
                    )
                })}  
            </div>

            <div className="estimateContent4">
                <div className="line">
                    <div className="fourLineTitle">참고사항</div>
                    <div className="fourLineContent">
                        <ol>
                            {fourList.map((v)=>{
                                return (
                                    <li>{v}</li>
                                )
                            })}
                        </ol>
                    </div>
                </div>  
                <div className="line">
                    <div className="fourLineTitle">총 공수</div>
                    <div className="fourLineContent">기간(일)</div>
                    <div className="fourLineContentResult">{
                        regex.replace.price(thirdLinesFirstCategory.reduce((prev, thirdLine) => {
                            return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdPeriod, 0)
                        }, 0))
                    }</div>
                </div>
                <div className="line">
                    <div className="fourLineTitle">실 작업기간</div>
                    <div className="fourLineContent">기간(일)</div>
                    <div className="fourLineContentResult">90</div>
                </div>
                <div className="line">
                    <div className="fourLineTitle">항목별 견적</div>
                    <ul className="fourLineContentList">
                        <li className="fourCalculation">합계</li>
                        <li className="fourCalculation">부가세</li>
                        <li className="fourCalculation">총계(부가세포함)</li>
                    </ul>
                    <ul className="fourLineContentResult">
                        <li className="fourCalculation">{
                            regex.replace.price(thirdLinesFirstCategory.reduce((prev, thirdLine) => {
                                return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdAmount, 0)
                            }, 0))
                        }</li>
                        <li className="fourCalculation">{
                            regex.replace.price(thirdLinesFirstCategory.reduce((prev, thirdLine) => {
                                return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdAmount, 0)
                            }, 0)*0.1)
                        }</li>
                        <li className="fourCalculation">{
                            regex.replace.price((thirdLinesFirstCategory.reduce((prev, thirdLine) => {
                                return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdAmount, 0)
                            }, 0)*1.1).toFixed(0))
                        }</li>
                    </ul>
                </div>  
                <div className="line">
                    <div className="fourLineTitle">할인 견적</div>
                    <ul className="fourLineContentList">
                        <li className="fourCalculation">합계</li>
                        <li className="fourCalculation">부가세</li>
                        <li className="fourCalculation">총계(부가세포함)</li>
                    </ul>
                    <ul className="fourLineContentResult">
                        <li className="fourCalculation">20,000,000</li>
                        <li className="fourCalculation">2,000,000</li>
                        <li className="fourCalculation">22,000,000</li>
                    </ul>
                </div>        
            </div>
        </div>
    )
}