import React, { Fragment, useState } from "react";
import Header from "../component/header";
import "../css/estimate.css";
import { regex } from '../component/regex';

declare var XLSX:any;

interface Data {
    title: string,
    content: string
}

interface DetailData {
    title: string,
    content: Array<{
        [key:string]:any
    }>
}

interface Etc {
    title: string
}

interface Total {
    title: string,
    amount: number
}

export default function Estimate() {

    const [thirdLineHide, setThirdLineHide] = useState<{[key:string]:boolean}>({})

    const [firstLines, setFirstLines] = useState<Data[]>([
        {title: "To.", content: "미림미디어랩"},
        {title: "프로젝트 명", content: "LMS 크로스플랫폼 앱 Front end 개발"},
        {title: "견적 담당자", content: "김수홍 대표이사"},
        {title: "연락처", content: "010.5604.4147"},
        {title: "Email", content: "aldegad@devmonster.co.kr"},
        {title: "주소", content: "경기도 성남시 분당구 황새울로 200번길 28 오너스타워 701호"}
    ]);
    
    const [secondLines, setSecondLines] = useState<Data[]>([
        {title: "개발범위", content: "AOS Front-end, iOS Front-end"},
        {title: "제작시스템", content: "Front-end: ionic angular"},
        {title: "결제방식", content: "선금 30% / 중도금 30% / 잔금 40%"},
        {title: "개발툴", content: "Visual Studio Code"}
    ]);

    const [thirdLines, setThirdLines] = useState<DetailData[]>([
        {
            title : "1. 하이브리드앱 퍼블리싱 및 프론트 제작",
            content : [
                {content:"개발 설계 및 테마 제작", period: 15, amount: 2500000},
                {content:"네이티브 - 카메라", period: 1, amount: 400000},
                {content:"네이티브 - GPS", period: 2, amount: 800000},
                {content:"인증시스템(login/join/terms)", period: 4, amount: 1600000},
                {content:"인증시스템(find-id/find-password)", period: 1, amount: 400000},
                {content:"메인(swiper, list/card, tabs)", period: 2, amount: 800000},
                {content:"검색(search, list/store)", period: 1, amount: 400000},
                {content:"검색결과(search, list/card)", period: 0.5, amount: 200000},
                {content:"공지사항(segment, list/accordian, tabs)", period: 1.5, amount: 600000},
                {content:"강의신청(like, share, segment, rich-content, list/card)", period: 2, amount: 800000},
                {content:"강의결재(checkbox, list/edit, rich-content/edit, payment)", period: 3, amount: 1200000},
                {content:"마이페이지(rich-content, list/card, tabs)", period: 1, amount: 400000},
                {content:"회원정보수정(profile/edit, tabs)", period: 1.5, amount: 600000},
                {content:"찜한강의(checkbox, list/card, list/edit)", period: 2, amount: 800000},
                {content:"증명서 발급(list/card, tabs)", period: 1.5, amount: 600000},
                {content:"나의 강의실,메인(segment, video/custom-player, list/accordian, tabs, GPS)", period: 3, amount: 1200000},
                {content:"나의 강의실,공지사항(segment, list/accordian, tabs)", period: 1, amount: 400000},
                {content:"나의 강의실,강의(segment, video/custom-player, list, tabs, GPS)", period: 1.5, amount: 600000},
                {content:"나의 강의실,시험(segment, list, tabs)", period: 1, amount: 400000},
                {content:"나의 강의실,시험상세(segment, rich-content, tabs)", period: 1.5, amount: 600000},
                {content:"나의 강의실,시험도중(segment, rich-content/edit, tabs)", period: 2.5, amount: 1200000},
                {content:"나의 강의실,과제(segment, list, tabs)", period: 1, amount: 400000},
                {content:"나의 강의실,과제상세(segment, rich-content, tabs)", period: 1, amount: 400000},
                {content:"나의 강의실,과제제출(segment, rich-content/edit, tabs)", period: 1.5, amount: 600000},
            ]
        }
    ]);

    const [fourList, setFourList] = useState<Etc[]>([
        {title: "기간은 Calendar Day를 기준으로 산정되었습니다."},
        {title: "보여주신 부분에서, 결재는 포함되고, 포인트는 빠진 것을 기준으로 견적이 작성되었습니다."}
    ])

    const [total, setTotal] = useState<Total[]>([
        {title: '실 작업기간', amount: 0},
        {title: '합계', amount: 0},
    ])

    const getElsx = (e:any) => {
        const fs = e.target.files;
        const f = fs[0];
        console.log(f);
        var reader = new FileReader();

        reader.onload = function(e2:any) {
        var data = e2.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        document.title = f.name.split('.')[0];

        workbook.SheetNames.forEach(function(sheetName:any, i:number) {
            // Here is your object
            var data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            console.log(data);
            if(i === 0) {
                setFirstLines(data);
            }
            else if(i === 1) {
                setSecondLines(data);
            }
            else if(i === 2) {
                let thirdData:any[] = [];
                data.forEach((item:any) => {
                    const { title, ...rest } = item;
                    if(title) {
                        thirdData.push({
                            title,
                            content: [rest]
                        })
                    }
                    else {
                        thirdData[thirdData.length-1].content.push(rest)
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

    const onCheckChange = (key:string) => {
        setThirdLineHide(cur => ({...cur, [key]:!thirdLineHide[key]}));
    }

    const preTotal = thirdLines.reduce((prev, thirdLine) => {
        return prev + thirdLine.content.reduce((_prev, item) => _prev + regex.replace.number(item.amount), 0)
    }, 0)

    const discountPrice = parseInt((100 - total[1].amount/preTotal * 100).toFixed(0));

    return (
        <>
            <div className="topButtons not-print">
                <input type="file" onChange={getElsx}></input>
                {
                    (() => {
                        const contentItem = thirdLines[0].content[0];
                        return Object.keys(contentItem).map(key => 
                            key === 'content' ? 
                            <div key={`check-${key}`}>
                                <input id={`check-${key}`} type="checkbox" name={key} checked={!thirdLineHide[key]} onChange={() => onCheckChange(key)}></input>
                                <label htmlFor={`check-${key}`}>내용</label>
                            </div>
                            : key === 'period' ?
                            <div key={`check-${key}`}>
                                <input id={`check-${key}`} type="checkbox" name={key} checked={!thirdLineHide[key]} onChange={() => onCheckChange(key)}></input>
                                <label htmlFor={`check-${key}`}>기간</label>
                            </div>
                            : key === 'amount' ?
                            <div key={`check-${key}`}>
                                <input id={`check-${key}`} type="checkbox" name={key} checked={!thirdLineHide[key]} onChange={() => onCheckChange(key)}></input>
                                <label htmlFor={`check-${key}`}>금액</label>
                            </div>
                            : 
                            <div key={`check-${key}`}>
                                <input id={`check-${key}`} type="checkbox" name={key} checked={!thirdLineHide[key]} onChange={() => onCheckChange(key)}></input>
                                <label htmlFor={`check-${key}`}>{key}</label>
                            </div>
                        )
                    })()
                }
            </div>
            
            <div className="estimate">
                <Header title="견적서"/>
                {/* 첫번째 */}
                <div className="estimateBox grid">
                    {firstLines.map((v,i)=>{
                        return (
                            <div key={'first-' + i} className="line">
                                <div key={v.title} className="firstLineTitle">{v.title}</div>
                                <div key={v.content} className="firstLineContent">{v.content}</div>
                            </div>
                        )
                    })}
                </div>
                {/* 두번째 */}
                <div className="estimateBox">
                        {secondLines.map((v,i)=>{
                            return (
                                <div key={`second-${i}`} className="line">
                                    <div key={v.title} className="firstLineTitle">{v.title}</div>
                                    <div key={v.content} className="firstLineContent">{v.content}</div>
                                </div>
                            )
                        })}
                </div>

                {/* 세번째 */}
                <div className="estimateBox">
                    <table className="table">
                        <thead>
                            <tr>
                            {
                                (() => {
                                    const contentItem = thirdLines[0].content[0];
                                    return Object.keys(contentItem).map(key => 
                                        thirdLineHide[key] ?
                                        null
                                        : key === 'content' ? 
                                        <th key={key}>내용</th>
                                        : key === 'period' ?
                                        <th key={key}>기간</th>
                                        : key === 'amount' ?
                                        <th key={key}>금액</th>
                                        : <th key={key}>{key}</th>
                                    )
                                })()
                            }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            thirdLines.map((item,i) => 
                                <Fragment key={`third-${i}`}>
                                    <tr>
                                        <th colSpan={Object.keys(thirdLines[0].content[0]).length}>{item.title}</th>
                                    </tr>
                                    {
                                        item.content.map((v,j) => (
                                            <tr key={`third-${i}-${j}`}>
                                                <td key={v.content} className="first">{v.content}</td>
                                                {
                                                    Object.keys(v).map(key =>
                                                        key === 'content' || thirdLineHide[key] ? null
                                                        : <td key={`third-${i}-${j}-${key}`} className="lineThreeContent">{v[key]}</td>
                                                    )
                                                }
                                            </tr>
                                        ))
                                    }
                                </Fragment>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <div className="estimateBox">
                    <div className="line">
                        <div className="fourLineTitle">참고사항</div>
                        <div className="fourLineContent">
                            <ol>
                                {fourList.map((v,i) => {
                                    return (
                                        <li key={`four-${i}`}>{v.title}</li>
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
                                return prev + thirdLine.content.reduce((_prev, item) => _prev + regex.replace.number(item.period), 0)
                            }, 0))
                        }</div>
                    </div>
                    <div className="line">
                        <div className="fourLineTitle">실 작업기간</div>
                        <div className="fourLineContent">기간(일)</div>
                        <div className="fourLineContentResult">{total[0].amount}</div>
                    </div>
                    <div className="line">
                        <div className="fourLineTitle">총 견적</div>
                        <ul className="fourLineContentList">
                            <li className="fourCalculation">합계</li>
                            <li className="fourCalculation">부가세</li>
                            <li className="fourCalculation">총계(부가세포함)</li>
                        </ul>
                        <ul className="fourLineContentResult">
                            <li className="fourCalculation">{
                                regex.replace.price(preTotal)
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price(thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + regex.replace.number(item.amount), 0)
                                }, 0)*0.1)
                            }</li>
                            <li className="fourCalculation">{
                                regex.replace.price((thirdLines.reduce((prev, thirdLine) => {
                                    return prev + thirdLine.content.reduce((_prev, item) => _prev + regex.replace.number(item.amount), 0)
                                }, 0)*1.1).toFixed(0))
                            }</li>
                        </ul>
                    </div>  
                    <div className="line">
                        <div className="fourLineTitle">실 견적</div>
                        <ul className="fourLineContentList">
                            {
                                discountPrice ?
                                <li className="fourCalculation">할인율</li>
                                : null
                            }
                            <li className="fourCalculation">합계</li>
                            <li className="fourCalculation">부가세</li>
                            <li className="fourCalculation">총계(부가세포함)</li>
                        </ul>
                        <ul className="fourLineContentResult">
                            {
                                discountPrice ?
                                <li className="fourCalculation">{discountPrice}%</li>
                                : null
                            }
                            <li className="fourCalculation">{regex.replace.price(total[1].amount)}</li>
                            <li className="fourCalculation">{regex.replace.price(Math.floor(total[1].amount*0.1))}</li>
                            <li className="fourCalculation">{regex.replace.price((total[1].amount*1.1).toFixed(0))}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}