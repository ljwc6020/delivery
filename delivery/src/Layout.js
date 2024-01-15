import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./layout.css";
import styled from "styled-components";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 메뉴 버튼 동작 제어를 위한 변수 선언
  const toggleMenu = () => {
    // 제어해줄 함수
    setIsOpen((isOpen) => !isOpen); // on,off 개념 boolean
  };

  // NavLink크는 태그가 아니라 스타일을 따로 안먹음,
  // styled-components로 따로 스타일을 지정해줌
  const MenuLink = styled(NavLink)`
    font-weight: 800;
    margin: 30px;
    color: black;
    display: block;
    overflow: hidden;

    &:hover {
      ${"" /* 마우스 커서 호버시 색상 변경 */}
      color: orange;
    }
    &.active {
      ${"" /* 액티브시 글자의 색상 변경 */}
      font-weight: 800;
      margin: 30p;
      color: orange;
      display: block;
    }
  `;

  return (
    <div>
      <div className="wraper">
        <header
          className="headerTop"
          style={{
            padding: 16,
            height: 80,
            display: "flex",
          }}
        >
          <Link to={"./"}>
            <h1 className="logo">1</h1>
          </Link>
          <ul className="headerMenu">
            <li>
              <MenuLink
                className={({ isActive }) => (isActive ? "active" : "")}
                // active 되면 active 스타일 적용
                to={"./Introduce"}
              >
                회사소개
              </MenuLink>
              {/* hover시 보일 메뉴들 */}
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">사업개요</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">경영이념·비전</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">CEO 인사말</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">연혁·수상</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="web/company/synopsis">회사조직도</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">BI소개</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">전자공고</a>
                        </li>

                        <li>
                          <a href="web/company/synopsis">언론보도</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="web/company/synopsis">찾아오시는길</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <MenuLink
                to={"./Indiv"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                개인택배
              </MenuLink>
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">이용안내</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">요금안내</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">포장안내</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">배송조회</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="web/company/synopsis">택배예약</a>
                          <ul>
                            <li>
                              <a href="web/company/synopsis">택배예약</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">반품예약</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">퀵서비스</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">예약확인</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="web/company/synopsis">사고접수</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">현금영수증</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <MenuLink
                to={"./Enterp"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                기업택배
              </MenuLink>
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">기업전용시스템</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">원격지원</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">배송조회링크서비스</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">오픈API안내</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="web/company/synopsis">제휴문의</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">요금문의</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <MenuLink
                to={"./Network"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                물류네트워크
              </MenuLink>
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">택배이동경로</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">분류센터안내</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">지점안내</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">취급점안내</a>
                          <ul>
                            <li>
                              <a href="web/company/synopsis">소개 개요</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">운영 프로세스</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">제안 내용</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="web/company/synopsis">영업소 모집안내</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <MenuLink
                to={"./ESG"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                지속가능한경영
              </MenuLink>
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">윤리경영</a>
                          <ul>
                            <li>
                              <a href="#web/company/synopsis">윤리경영이란</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">행동강령</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">임직원 실천지침</a>
                            </li>
                            <li>
                              <a href="web/company/synopsis">사랑의 매</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="web/company/synopsis">사회공헌</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">안전환경보건경영</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">지속가능성 보고</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <MenuLink
                to={"./CustomerService"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                고객지원센터
              </MenuLink>
              <div className="dropDownBox">
                <div className="menuBox">
                  <div className="menuL"></div>
                  <div className="menuR">
                    <div class="menuText">
                      <ul>
                        <li>
                          <a href="web/company/synopsis">고객문의</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">고객 유의사항</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">자주묻는질문</a>
                        </li>
                        <li>
                          <a href="web/company/synopsis">공지사항</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="headerRight">
            {/* 이 아래로 메뉴 버튼 클릭시 나와야 할것들 목록 */}
            <div className={isOpen ? "show-menu" : "hide-menu"}>
              <div className="sideMenu">
                <div>
                  <div className="tit">회사소개</div>
                  <ul>
                    <li>
                      <a href="/web/company/synopsis">사업개요</a>
                    </li>
                    <li>
                      <a href="/web/company/vision">경영이념·비전</a>
                    </li>
                    <li>
                      <a href="/web/company/intro">CEO 인사말</a>
                    </li>
                    <li>
                      <a href="/web/company/history">연혁·수상</a>
                    </li>
                    <li>
                      <a href="/web/company/organization">회사조직도</a>
                    </li>
                    <li>
                      <a href="/web/company/bi">BI소개</a>
                    </li>
                    <li>
                      <a href="/web/company/dart">전자공고</a>
                    </li>
                    <li>
                      <a href="/web/company/news">언론보도</a>
                    </li>
                    <li>
                      <a href="/web/company/map">찾아오시는 길</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="tit">개인택배</div>
                  <ul>
                    <li>
                      <a href="/web/personal/accessGuide">이용안내</a>
                    </li>
                    <li>
                      <a href="/web/personal/chargeInfo">요금안내</a>
                    </li>
                    <li>
                      <a href="/web/personal/packingGuide">포장안내</a>
                    </li>
                    <li>
                      <a href="/web/personal/tkSearch">배송조회</a>
                    </li>
                    <li>
                      <a href="/web/reservation/reserve">택배예약</a>
                    </li>
                    <li>
                      <a href="/web/personal/accidentReceive">사고접수</a>
                    </li>
                    <li>
                      <a href="/web/personal/cashReceipt">현금영수증</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="tit">기업택배</div>
                  <ul>
                    <li>
                      <a href="/web/enterprise/system">기업전용시스템</a>
                    </li>
                    <li>
                      <a href="/web/enterprise/remote">원격지원</a>
                    </li>
                    <li>
                      <a href="/web/enterprise/linkService">
                        배송조회링크서비스
                      </a>
                    </li>
                    <li>
                      <a href="/web/enterprise/openAPI">오픈API안내</a>
                    </li>
                    <li>
                      <a href="/web/enterprise/alliance">제휴문의</a>
                    </li>
                    <li>
                      <a href="/web/enterprise/charge">요금문의</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="tit">물류네트워크</div>
                  <ul>
                    <li>
                      <a href="/web/network/tkMoveLine">택배이동경로</a>
                    </li>
                    <li>
                      <a href="/web/network/classifyCenter">분류센터안내</a>
                    </li>
                    <li>
                      <a href="/web/network/centerInfo">지점안내</a>
                    </li>
                    <li>
                      <a href="/web/network/dealingStore">취급점안내</a>
                    </li>
                    <li>
                      <a href="/web/network/officeRecruit">영업소 모집안내</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="tit">지속가능경영</div>
                  <ul>
                    <li>
                      <a href="/web/management/justice">윤리경영</a>
                    </li>
                    <li>
                      <a href="/web/management/socialContribution">사회공헌</a>
                    </li>
                    <li>
                      <a href="/web/management/safety">안전환경보건경영</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="tit">고객지원</div>
                  <ul>
                    <li>
                      <a href="/web/customer/cs">고객문의</a>
                    </li>
                    <li>
                      <a href="/web/customer/note">고객 유의사항</a>
                    </li>
                    <li>
                      <a href="/web/customer/faq">자주묻는질문</a>
                    </li>
                    <li>
                      <a href="/web/customer/notice">공지사항</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Link to="./Login">
                <li>로그인</li>
              </Link>
              <Link to="./MyPage">
                <li>마이페이지</li>
              </Link>
              <Link to="./Join">
                <li>회원가입</li>
              </Link>
              <li
                // is Open 이 true 면 xBar라는 이름이 calssName 아니면 menu
                className={isOpen ? "xBar" : "menu"}
                onClick={() => toggleMenu()}
              >
                <span>
                  ME
                  <br />
                  NU
                </span>
              </li>
            </ul>
          </div>
        </header>
        {/* header 는 메인 Outlet 위에 */}
        <main>
          <Outlet />
        </main>
      </div>
      {/* footer 는 메인 Outlet 아래 */}
      <footer>
        <div className="footerLink">
          <ul className="linkL">
            <li>
              <a href="web/company/synopsis">개인정보처리방침</a>
            </li>
            <li>
              <a href="web/company/synopsis">영상정보처리기기운영·관리방침</a>
            </li>
            <li>
              <a href="web/company/synopsis">이메일무단수집거부</a>
            </li>
            <li>
              <a href="web/company/synopsis">이용약관</a>
            </li>
            <li>
              <a href="web/company/synopsis">택배표준약관</a>
            </li>
          </ul>
          <ul className="linkR">
            <li>
              <a
                href="https://blog.naver.com/logen-logistics"
                target="_blank"
                class="btnNaverBlog"
                rel=" noopener noreferrer"
                // a태그에서 target ="_blank" 로 열때 생기는 보안 취약점 때문에 추가하는 문장
              >
                naver blog
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/logenlogistics1999"
                target="_blank"
                class="btnInsta"
                rel=" noopener noreferrer"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/logenlogistics"
                target="_blank"
                class="btnFacebook"
                rel=" noopener noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC69org_V8745_fWgud0-efA"
                target="_blank"
                class="btnYoutube"
                rel=" noopener noreferrer"
              >
                youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="footerText">
          <div>
            <p>
              서울시 동대문구 정릉천동로 <em>12</em> 삼사빌딩 <em>5</em>층
              택배주식회사 대표 000
            </p>
            <p>
              대표전화 <em>1234-5678</em> 통신판매업신고 <em>2016</em>-서울강남-
              <em>12345</em> 사업자등록번호 <em>123-45-67891</em> 이메일{" "}
              <em>abcde@ezen.com</em>
            </p>
            <p class="copyright">
              <em>Ezen Co.,Ltd 2023. ALL rights Reserved</em>
            </p>
          </div>
          <div class="footerLogo">
            <a href="./">
              <img
                src="https://www.ilogen.com/static/images/footer_logo.png"
                alt="LOGEN 로젠택배"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
