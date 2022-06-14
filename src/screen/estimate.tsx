import React from "react";
import Header from "../component/header";
import "../css/estimate.css";
export default function Estimate() {

    const firstLines = [
        {firstTitle : "회사명", firstContent: "데브몬스터"},
        {firstTitle : "사이트", firstContent: "https://www.naver.com/"},
        {firstTitle : "개발범위", firstContent: "홈페이지, 어플"},
        {firstTitle : "담당자", firstContent: "김수홍 대표이사"},
        {firstTitle : "제작기간", firstContent: "77일"},
        {firstTitle : "연락처", firstContent: "010.5604.4147"},
        {firstTitle : "주소", firstContent: "서울 특별시 강남구 도곡로 112 gvc2층 c3"},
        {firstTitle : "견적업체", firstContent: "에이럭스"}
    ];

    const secondLines = [
        {secondTitle:"개발인력", secondContent:"기획자, 디자이너, 프론트개발자, 백엔드개발자"},
        {secondTitle:"제작시스템", secondContent:"Front : Angular / Back : django, Mysql, (Linux or window)"},
        {secondTitle:"결제방식", secondContent:"선금 30% / 중도금 30% / 잔금 40%"},
        {secondTitle:"개발툴", secondContent:"Visual Studio Code / Visual Studio"},
    ];

    const thirdLinesFirstCategory = [
        {thirdTitle:"기획-스토리보드", thirdPeriod:"14.0", thirdPersonnel:"2", thirdUnitPrice:"4,500,000", thirdAmount:"4,500,000"},
        {thirdTitle:"UI 디자인", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
        {thirdTitle:"관리자-회원관리", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
        {thirdTitle:"관리자-위탁사 등록 관리", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
        {thirdTitle:"위탁사-기초정보 등록관리 (교실명, 강좌영역, 수업시간, 대상학년, 공휴일 등)", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
        {thirdTitle:"월간수업 캘린더", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
        {thirdTitle:"문자발송등록관리", thirdPeriod:"7.0", thirdPersonnel:"1", thirdUnitPrice:"2,200,000", thirdAmount:"2,200,000"},
    ]
    const thirdLinesSecondCategory = [
        {thirdTitle:"사용자 인터페이스 개발", thirdPeriod:"9.0", thirdPersonnel:"2", thirdUnitPrice:"4,500,000", thirdAmount:"4,500,000"}
    ]

    const periodSum = () => {
        let resultPeriod = 0;
        for(let i = 0; i < thirdLinesFirstCategory.length; i++) {
            resultPeriod += Number(thirdLinesFirstCategory[i].thirdPeriod);
        }
        return resultPeriod;
    }

    const fourList = ["BGBG2022_발주.doc 문서 기준으로 작성되었습니다.","웹 기반이므로 코디마스터 프로그램중 2007 한글파일이 필요한 연동기능은 제외되었습니다."]
    return (
        <div className="estimate">
            <Header title="견적서"/>

            {/* 첫번째 */}
            <div className="estimateContent1">
                <div className="boundaryLine">
                    {firstLines.map((v,i)=>{
                        return (
                            <div key={i} className="line">
                                <div key={v.firstTitle} className="firstLineTitle">{v.firstTitle}</div>
                                <div key={v.firstContent} className="firstLineContent">{v.firstContent}</div>
                            </div>     
                        )
                    })}
                </div>

            {/* 두번째 */}
            </div>
            <div className="estimateContent2">
                    {secondLines.map((v,i)=>{
                        return (
                            <div key={i} className="boundaryLineTwo">
                                <div key={i+1} className="lineTwo">
                                    <div key={v.secondTitle} className="firstLineTitle">{v.secondTitle}</div>
                                    <div key={v.secondContent} className="firstLineContent">{v.secondContent}</div>
                                </div>  
                            </div>   
                        )
                    })}
            </div>

            {/* 세번째 */}
            <div className="estimateContent3">
                <ul className="boundaryLineThreeHead">
                    <li className="boundaryLineThreeList1">내용</li>
                    <li className="boundaryLineThreeList">기간</li>
                    <li className="boundaryLineThreeList">인원</li>
                    <li className="boundaryLineThreeList">단가</li>
                    <li className="boundaryLineThreeList">금액</li>
                </ul>        
                <div className="lineThree">1. 서버 / 프론트</div>
                    {
                        thirdLinesFirstCategory.map((v,i)=>{
                            return (
                                <ul key={i} className="lineThreeList">
                                    <li key={v.thirdTitle} className="lineThreeFirst">{v.thirdTitle}</li>
                                    <li key={v.thirdPeriod} className="lineThreeContent">{v.thirdPeriod}</li>
                                    <li key={v.thirdPersonnel} className="lineThreeContent">{v.thirdPersonnel}</li>
                                    <li key={v.thirdUnitPrice} className="lineThreeContent">{v.thirdUnitPrice}</li>
                                    <li key={v.thirdAmount} className="lineThreeContent">{v.thirdAmount}</li>
                                </ul>
                            )
                        })
                    }

                <div className="lineThree">2. PC홈페이지</div>
                    {
                        thirdLinesSecondCategory.map((v,i)=>{ 
                            return (
                                <ul key={i} className="lineThreeList">
                                    <li key={v.thirdTitle} className="lineThreeFirst">{v.thirdTitle}</li>
                                    <li key={v.thirdPeriod} className="lineThreeContent">{v.thirdPeriod}</li>
                                    <li key={v.thirdPersonnel} className="lineThreeContent">{v.thirdPersonnel}</li>
                                    <li key={v.thirdUnitPrice} className="lineThreeContent">{v.thirdUnitPrice}</li>
                                    <li key={v.thirdAmount} className="lineThreeContent">{v.thirdAmount}</li>
                                </ul>
                            )                            
                        })
                    }
            </div>

            {/* 네번째 */}
            <div className="estimateContent4">
                <div className="boundaryLineFour">
                    <div className="lineFour">
                        <div className="fourLineTitle">참고사항</div>
                        <div className="fourtLineList">
                            <ol>
                                {fourList.map((v)=>{
                                    return (
                                        <li>{v}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>  
                </div>
                <div className="boundaryLineFour">
                    <div className="lineFour">
                        <div className="fourLineTitle">공수</div>
                        <div className="fourLineContent">기간(일)</div>
                        <div className="fourLineContentResult">{`${periodSum()}`}</div>
                    </div>  
                </div>
                <div className="boundaryLineFour">
                    <div className="lineFour">
                        <div className="fourLineTitle">항목별 견적</div>
                        <ul className="fourLineContentList">
                            <li className="fourCalculation">합계</li>
                            <li className="fourCalculation">부가세</li>
                            <li className="fourCalculation">총계(부가세포함)</li>
                        </ul>
                        <ul className="fourLineContentResult">
                            <li className="fourCalculation">31,550,000</li>
                            <li className="fourCalculation">3,000,000</li>
                            <li className="fourCalculation">34,550,000</li>
                        </ul>
                    </div>  
                </div>
                <div className="boundaryLineFour">
                    <div className="lineFour">
                        <div className="fourLineTitle">할인 견적</div>
                        <ul className="fourLineContentList">
                            <li className="fourCalculation">합계</li>
                            <li className="fourCalculation">부가세</li>
                            <li className="fourCalculation">총계(부가세포함)</li>
                        </ul>
                        <ul className="fourLineContentResult">
                            <li className="fourCalculation">31,550,000</li>
                            <li className="fourCalculation">3,000,000</li>
                            <li className="fourCalculation">34,550,000</li>
                        </ul>
                    </div>  
                </div>          
            </div>
        </div>
    )
}