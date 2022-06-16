import React, { useState } from "react";
import Header from "../component/header";
import "../css/estimate.css";
import { regex } from '../component/regex';

declare var XLSX:any;

export default function Estimate() {

    const valueOnChange = (ch:any, index:number,value:any,set:any) => {
        const newContent = [...value];
        newContent[index].content = ch;
        set(newContent);
    };

    const [firstLines, setFirstLines] = useState([
        {title: "To.", content: "미림미디어랩"},
        {title: "프로젝트 명", content: "LMS 크로스플랫폼 앱 Front end 개발"},
        {title: "견적 담당자", content: "김수홍 대표이사"},
        {title: "연락처", content: "010.5604.4147"},
        {title: "Email", content: "aldegad@devmonster.co.kr"},
        {title: "주소", content: "경기도 성남시 분당구 황새울로 200번길 28 오너스타워 701호"}
    ]);
    
    const [secondLines, setSecondLines] = useState([
        {secondTitle: "개발범위", content: "AOS Front-end, iOS Front-end"},
        {secondTitle: "제작시스템", content: "Front-end: ionic angular"},
        {secondTitle: "결제방식", content: "선금 30% / 중도금 30% / 잔금 40%"},
        {secondTitle: "개발툴", content: "Visual Studio Code"}
    ]);

    const [thirdLines, setThirdLines] = useState([
        {
            title : "1. 하이브리드앱 퍼블리싱 및 프론트 제작",
            content : [
                {thirdTitle:"개발 설계 및 테마 제작", thirdPeriod: 15, thirdAmount: 2500000},
                {thirdTitle:"네이티브 - 카메라", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"네이티브 - GPS", thirdPeriod: 2, thirdAmount: 800000},
                {thirdTitle:"인증시스템(login/join/terms)", thirdPeriod: 4, thirdAmount: 1600000},
                {thirdTitle:"인증시스템(find-id/find-password)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"메인(swiper, list/card, tabs)", thirdPeriod: 2, thirdAmount: 800000},
                {thirdTitle:"검색(search, list/store)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"검색결과(search, list/card)", thirdPeriod: 0.5, thirdAmount: 200000},
                {thirdTitle:"공지사항(segment, list/accordian, tabs)", thirdPeriod: 1.5, thirdAmount: 600000},
                {thirdTitle:"강의신청(like, share, segment, rich-content, list/card)", thirdPeriod: 2, thirdAmount: 800000},
                {thirdTitle:"강의결재(checkbox, list/edit, rich-content/edit, payment)", thirdPeriod: 3, thirdAmount: 1200000},
                {thirdTitle:"마이페이지(rich-content, list/card, tabs)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"회원정보수정(profile/edit, tabs)", thirdPeriod: 1.5, thirdAmount: 600000},
                {thirdTitle:"찜한강의(checkbox, list/card, list/edit)", thirdPeriod: 2, thirdAmount: 800000},
                {thirdTitle:"증명서 발급(list/card, tabs)", thirdPeriod: 1.5, thirdAmount: 600000},
                {thirdTitle:"나의 강의실,메인(segment, video/custom-player, list/accordian, tabs, GPS)", thirdPeriod: 3, thirdAmount: 1200000},
                {thirdTitle:"나의 강의실,공지사항(segment, list/accordian, tabs)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"나의 강의실,강의(segment, video/custom-player, list, tabs, GPS)", thirdPeriod: 1.5, thirdAmount: 600000},
                {thirdTitle:"나의 강의실,시험(segment, list, tabs)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"나의 강의실,시험상세(segment, rich-content, tabs)", thirdPeriod: 1.5, thirdAmount: 600000},
                {thirdTitle:"나의 강의실,시험도중(segment, rich-content/edit, tabs)", thirdPeriod: 2.5, thirdAmount: 1200000},
                {thirdTitle:"나의 강의실,과제(segment, list, tabs)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"나의 강의실,과제상세(segment, rich-content, tabs)", thirdPeriod: 1, thirdAmount: 400000},
                {thirdTitle:"나의 강의실,과제제출(segment, rich-content/edit, tabs)", thirdPeriod: 1.5, thirdAmount: 600000},
            ]
        },
        {
            title: "2. 디버깅",
            content: [
                {thirdTitle:"단위테스트", thirdPeriod: 30, thirdAmount: 5000000}
            ]
        },
        {
            title: "3. 출시",
            content: [
                {thirdTitle:"안드로이드 스토어 설정 및 배포", thirdPeriod: 7, thirdAmount: 1100000},
                {thirdTitle:"아이폰 스토어 설정 및 배포", thirdPeriod: 14, thirdAmount: 2200000}
            ]
        }
    ]);

    const fourList = [
        "기간은 Calendar Day를 기준으로 산정되었습니다.",
        "보여주신 부분에서, 결재는 포함되고, 포인트는 빠진 것을 기준으로 견적이 작성되었습니다."
    ]

    const [correctBool, setCorrectBool] = useState(false);
    
    const correctButton = () => {
        setCorrectBool(!correctBool);
    }
    const getElsx = (e:any) => {
        const fs = e.target.files;
        console.log(fs);
        const f = fs[0];
        console.log(f);

        var reader = new FileReader();

        reader.onload = function(e2:any) {
        var data = e2.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        workbook.SheetNames.forEach(function(sheetName:any, i:number) {
            // Here is your object
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            console.log(XL_row_object);
            if(i === 0) {
                setFirstLines(XL_row_object);
            }
            console.log(firstLines);
        })

        };

        reader.onerror = function(ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(f);
    }
    return (
        <>
            <input type="file" onChange={getElsx}></input>
            <div className="estimate">
                <Header title="견적서"/>
                {/* <button style={{position:"absolute", top:'45mm', left:'73.3mm'}} onClick={correctButton}>{correctBool ? "수정 완료" : "수정 하기"}</button> */}
                {/* 첫번째 */}
                <div className="estimateContent1">
                    <div className="boundaryLine">
                        {firstLines.map((v,i)=>{
                            return (
                                <div key={'first' + i} className="line">
                                    <div key={v.title} className="firstLineTitle">{v.title}</div>
                                    {correctBool ? <input type={"text"} className="firstLineContent" value={v.content} onChange={(e) => valueOnChange(e.target.value,i,firstLines,setFirstLines)} />  : <div key={v.content} className="firstLineContent">{v.content}</div> }
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
                                    {correctBool ? <input type={"text"} className="firstLineContent" value={v.content} onChange={(e) => valueOnChange(e.target.value,i,secondLines,setSecondLines)} /> : <div key={v.content} className="firstLineContent">{v.content}</div>}
                                </div>   
                            )
                        })}
                </div>

                {/* 세번째 */}
                <div className="estimateContent3">
                    {correctBool ? <button style={{position:"absolute", right:'56mm'}}>추가하기</button> : null}
                    <ul className="boundaryLineThreeHead">
                        <li className="boundaryLineThreeList1">내용</li>
                        <li className="boundaryLineThreeList">기간</li>
                        <li className="boundaryLineThreeList">금액</li>
                    </ul>      
                    {thirdLines.map((v)=>{
                        return (
                            <div>
                                <div className="lineThree">{v.title}</div>
                                    {v.content.map((vv,i) => {
                                        return (
                                            <ul key={i} className="lineThreeList">
                                                <li key={vv.thirdTitle} className="lineThreeFirst">{vv.thirdTitle}</li>
                                                <li key={vv.thirdPeriod} className="lineThreeContent">{vv.thirdPeriod.toFixed(1)}</li>
                                                <li key={vv.thirdAmount} className="lineThreeContent">{regex.replace.price(vv.thirdAmount)}</li>
                                            </ul> 
                                        )
                                    })}
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
                            regex.replace.price(thirdLines.reduce((prev, thirdLine) => {
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
                                regex.replace.price(thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdAmount, 0)
                                }, 0))
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price(thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + item.thirdAmount, 0)
                                }, 0)*0.1)
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price((thirdLines.reduce((prev, thirdLine) => {
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
        </>
    )
}