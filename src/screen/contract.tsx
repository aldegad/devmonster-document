import React from "react";
import Header from "../component/header";
import "../css/contract.css";

export default function Contract() {
    const titleName = "개발 계약서";

    const contractContent = [
        {title : "계약명 : ", content : "플릿 앱 / 백오피스 개발"},
        {title : "계약 기간 : ", content : "2022년 06월 07일 ~ 11월 06일"},
        {title : "계약 대금 : ", content : "72,000,000(부가가치세 10% 별도)"},
        {title : "갑 (클라이언트) : ", content : "(주)홍해"},
        {title : "을 (파트너) : ", content : "데브몬스터"},
        {title : "계약 체결일 : ", content : "2022년 06월 07일"},
    ]
    const companyABinfo = [
        [
        {title : "법인명 : ", content : "(주)홍해"},
        {title : "대표자 : ", content : "홍길동"},
        {title : "사업자등록번호 : ", content : "000-00-00000"},
        {title : "사업장 소재지 : ", content : "인천광역시 동구 화수부두로 52"}
        ],
        [
        {title : "법인명 : ", content : "데브몬스터"},
        {title : "대표자 : ", content : "김수홍"},
        {title : "사업자등록번호 : ", content : "108-86-09861"},
        {title : "사업장 소재지 : ", content : "서울특별시 강남구 도곡로 112 gvc 2cmd c3"}
        ]
    ];
    return (
        <div className="contract">
            <Header title={titleName} />
            {/* 첫번째 */}
            <div className="contractInfoOne">
                <h2 className="contractInfoTitle">계약 정보</h2>
                <div className="contractInfos">
                    {
                        contractContent.map((v)=>{
                            return (
                                <div className="contractLine">
                                    <div className="contractTitle">{v.title}</div>
                                    <div className="contractContent">{v.content}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 두번쨰 */}
            <div className="contractInfoTwo">
                <h3 className="companyA">갑 (클라이언트)</h3>
                <div className="contractInfos">
                    {
                        companyABinfo[0].map((v)=>{
                            return (
                                <div className="contractLine">
                                    <div className="contractTitle">{v.title}</div>
                                    <div className="contractContent">{v.content}</div>
                                </div>
                            )
                        })
                    }
                    <div className="stamp">(인)</div>
                </div>
                <h3 className="companyB">을 (파트너)</h3>
                <div className="contractInfos">
                    {
                        companyABinfo[1].map((v)=>{
                            return (
                                <div className="contractLine">
                                    <div className="contractTitle">{v.title}</div>
                                    <div className="contractContent">{v.content}</div>
                                </div>
                            )
                        })
                    }
                    <div className="stamp">(인)</div>
                </div>
            </div>
            {/* 세번째 */}
            <div className="contractDetail">
                <h2 className="contractDetailTitle">계약 내용</h2>
                <div>
                ㈜흥해 (이하 “갑” 이라 함)과 데브몬스터(이하 “을”이라 함)는 선박운항관리시스템 (이하 “용역” 이라 함)개발에 관련된 사항을 규정하기 위하여 계약을 체결한다.
                제1조 (목 적)
                본 계약은 “갑”이 제 3조의 용역의 수행을 “을”에게 의뢰하는 것에 관한 구체적인 사항을 정함을 그 목적으로 한다.

                제2조 (계약의 체결 및 효력)
                본 계약은 ‘갑’과 ‘을’이 온라인 또는 오프라인으로 상호 날인 또는 서명함으로써 성립함과 동시에 그 효력이 발생한다.
                본계약과 관련하여 서면(전자문서 및 전자거래 기본법 제 2조 제 1항에 따른 전자문서를 포함. 이하 동일)으로 합의한 사항은 본 계약과 동일한 효력을 갖습니다. 다만, 본 계약 체결일 전에 이루어진 일체의 합의는 본 계약으로 대체되며 본 계약이 그에 우선한다.
                ‘갑’과 ‘을’은 본 계약서 및 관련 법령을 준수하고 신의성실의 원칙에 따라 의무를 이행해야 한다.

                제3조 (용역의 대상 및 범위)
                본 계약에 따라 “을”이 수행할 용역의 범위 및 내용은 아래와 같다
                분석 및 기획
                디자인 및 데이터 구축 개발
                시험 및 교육
                “을”은 “갑”의 용역의 추가 또는 변경 요청이 있는 경우 계약 금액의 조정, 용역 기간의 변경 및 기타 계약에 필요한 사항은 “갑”과 “을”이 별도 협의하여 정한다.
                </div>
            </div>
        </div>
    )
}