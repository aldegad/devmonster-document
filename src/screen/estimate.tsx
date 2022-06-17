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
        {title: "개발범위", content: "AOS Front-end, iOS Front-end"},
        {title: "제작시스템", content: "Front-end: ionic angular"},
        {title: "결제방식", content: "선금 30% / 중도금 30% / 잔금 40%"},
        {title: "개발툴", content: "Visual Studio Code"}
    ]);

    const [thirdLines, setThirdLines] = useState([
        {  
            title : "1번",
            content : [
                {subTitle:"개발 설계 및 테마 제작", period: 15, amount: 2500000},
                {subTitle:"네이티브 - 카메라", period: 1, amount: 400000},
                {subTitle:"네이티브 - GPS", period: 2, amount: 800000},
                {subTitle:"인증시스템(login/join/terms)", period: 4, amount: 1600000},
                {subTitle:"인증시스템(find-id/find-password)", period: 1, amount: 400000},
                {subTitle:"메인(swiper, list/card, tabs)", period: 2, amount: 800000},
                {subTitle:"검색(search, list/store)", period: 1, amount: 400000},
                {subTitle:"검색결과(search, list/card)", period: 0.5, amount: 200000},
                {subTitle:"공지사항(segment, list/accordian, tabs)", period: 1.5, amount: 600000},
                {subTitle:"강의신청(like, share, segment, rich-content, list/card)", period: 2, amount: 800000},
                {subTitle:"강의결재(checkbox, list/edit, rich-content/edit, payment)", period: 3, amount: 1200000},
                {subTitle:"마이페이지(rich-content, list/card, tabs)", period: 1, amount: 400000},
                {subTitle:"회원정보수정(profile/edit, tabs)", period: 1.5, amount: 600000},
                {subTitle:"찜한강의(checkbox, list/card, list/edit)", period: 2, amount: 800000},
                {subTitle:"증명서 발급(list/card, tabs)", period: 1.5, amount: 600000},
                {subTitle:"나의 강의실,메인(segment, video/custom-player, list/accordian, tabs, GPS)", period: 3, amount: 1200000},
                {subTitle:"나의 강의실,공지사항(segment, list/accordian, tabs)", period: 1, amount: 400000},
                {subTitle:"나의 강의실,강의(segment, video/custom-player, list, tabs, GPS)", period: 1.5, amount: 600000},
                {subTitle:"나의 강의실,시험(segment, list, tabs)", period: 1, amount: 400000},
                {subTitle:"나의 강의실,시험상세(segment, rich-content, tabs)", period: 1.5, amount: 600000},
                {subTitle:"나의 강의실,시험도중(segment, rich-content/edit, tabs)", period: 2.5, amount: 1200000},
                {subTitle:"나의 강의실,과제(segment, list, tabs)", period: 1, amount: 400000},
                {subTitle:"나의 강의실,과제상세(segment, rich-content, tabs)", period: 1, amount: 400000},
                {subTitle:"나의 강의실,과제제출(segment, rich-content/edit, tabs)", period: 1.5, amount: 600000},
            ]
        },
        {
            title: "2. 디버깅",
            content: [
                {subTitle:"단위테스트", period: 30, amount: 5000000}
            ]
        },
        {
            title: "3. 출시",
            content: [
                {subTitle:"안드로이드 스토어 설정 및 배포", period: 7, amount: 1100000},
                {subTitle:"아이폰 스토어 설정 및 배포", period: 14, amount: 2200000}
            ]
        }
    ]);

    const [fourList, setFourList] = useState([
        {title: "기간은 Calendar Day를 기준으로 산정되었습니다."},
        {title: "보여주신 부분에서, 결재는 포함되고, 포인트는 빠진 것을 기준으로 견적이 작성되었습니다."}
    ])

    const [total, setTotal] = useState([
        {title: '실 작업기간', amount: 0},
        {title: '합계', amount: 0},
    ])

    const [correctBool, setCorrectBool] = useState(false);
    
    const correctButton = () => {
        setCorrectBool(!correctBool);
    }
    const getElsx = (e:any) => {
        const fs = e.target.files;
        const f = fs[0];
        var reader = new FileReader();

        reader.onload = function(e2:any) {
        var data = e2.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        workbook.SheetNames.forEach(function(sheetName:any, i:number) {
            // Here is your object
            var data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if(i === 0) {
                setFirstLines(data);
            }
            else if(i === 1) {
                setSecondLines(data);
            }
            else if(i === 2) {
                let thirdData:any[] = [];
                data.forEach((item:any) => {
                    const { title, subTitle, period, amount } = item;
                    const content = {
                        subTitle,
                        period: Number(period.replace(/,/g, '')),
                        amount: Number(amount.replace(/,/g, ''))
                    }
                    if(title) {
                        thirdData.push({
                            title,
                            content: [content]
                        })
                    }
                    else {
                        thirdData[thirdData.length-1].content.push(content)
                    }
                })
                setThirdLines(thirdData);
            }
            else if(i === 3) {
                setFourList(data);
            }
            else if(i === 4) {
                console.log(data);
                const parseData = data.map((row:any) => {
                    return {
                        title: row.title,
                        amount: Number(row.amount.replace(/,/g,''))
                    }
                });
                console.log(parseData);
                setTotal(parseData);
            }
        })

        };

        reader.onerror = function(ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(f);
    }
    return (
        <>
            <input className="not-print" type="file" onChange={getElsx}></input>
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
                                    <div key={v.title} className="firstLineTitle">{v.title}</div>
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
                                                <li key={vv.subTitle} className="lineThreeFirst">{vv.subTitle}</li>
                                                <li key={vv.period} className="lineThreeContent">{vv.period.toFixed(1)}</li>
                                                <li key={vv.amount} className="lineThreeContent">{regex.replace.price(vv.amount)}</li>
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
                                        <li>{v.title}</li>
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
                                return prev + thirdLine.content.reduce((_prev, item) => _prev + item.period, 0)
                            }, 0))
                        }</div>
                    </div>
                    <div className="line">
                        <div className="fourLineTitle">실 작업기간</div>
                        <div className="fourLineContent">기간(일)</div>
                        <div className="fourLineContentResult">{total[0].amount}</div>
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
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + item.amount, 0)
                                }, 0))
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price(thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + item.amount, 0)
                                }, 0)*0.1)
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price((thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + item.amount, 0)
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
                            <li className="fourCalculation">{regex.replace.price(total[1].amount)}</li>
                            <li className="fourCalculation">{regex.replace.price(total[1].amount*0.1)}</li>
                            <li className="fourCalculation">{regex.replace.price((total[1].amount*1.1).toFixed(0))}</li>
                        </ul>
                    </div>        
                </div>
            </div>
        </>
    )
}