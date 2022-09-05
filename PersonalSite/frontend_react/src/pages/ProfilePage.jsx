import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "../css/ProfilePage.css";

function ProfilePage(props) {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const navigate = useNavigate();

  const clickToSeeMore = () => {
    setIsSeeMore(true);
  };

  const moveToPage = (target = "/") => {
    navigate(target);
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-wrap content-up">
          <img
            src={require("../static/img/profile.jpg")}
            alt=""
            className="profile-img"
          />
          <div className="profile-content-wrap margin-right-style">
            <div className="profile-content-title">
              <span className="profile-title-head">정재윤(Jaeyun Jung)</span>
              <br />
              <span className="profile-title-content">
                한국외국어대학교 GBT학부, 컴퓨터.전자시스템공학부
              </span>
              <br />
              <span className="profile-title-content">GPA: 4.09/4.5</span>
            </div>
            <div className="profile-content-part">
              <span className="profile-part-head">Awards</span>
              <br />
              <span className="profile-part-content">
                2022 SW공동해커톤 우수상(SW중심대학협회장상)수상
              </span>
              <br />
              <span className="profile-part-content">
                2021 GBT학부 캡스톤 디자인 경진대회 최우수상(경상대학장상)수상
              </span>
              <br />
              <span className="profile-part-content">
                2021 SBA 웹 개발 프로그램 최우수상 수상
              </span>
            </div>
            <div className="profile-content-part">
              <span className="profile-part-head">Work Experience</span>
              <br />
              <span className="profile-part-content">
                긱스로프트 Web/App 개발 인턴(22.09.01 ~ 현재)
              </span>
              <br />
              <span className="profile-part-content">
                클루커스 MSP 헬프데스크(22.02.13 ~ 09.17)
              </span>
              <br />
              <span className="profile-part-content">
                위메프 O2O실 지원팀 사원(19.12.01 ~ 20.08.29/21.06.21 ~ 08.20)
              </span>
            </div>
          </div>
        </div>
        {!isSeeMore ? (
          <></>
        ) : (
          <div className="profile-wrap content-down">
            <div className="profile-content-wrap">
              <div className="profile-content-part" id="show-more">
                <span className="profile-part-head">Skills</span>
                <br />
                <span className="profile-part-sub-head">
                  Part1. Use & Studying
                </span>
                <ul>
                  <li>
                    <span className="profile-part-content">
                      🛠Web/App Development
                    </span>
                    <br />
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/vue-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=MySql&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=Django&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=Php&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white"
                        }
                        alt=""
                      />
                    </div>
                  </li>
                  <br />
                  <li>
                    <span className="profile-part-content">
                      ⚒Programming Languages
                    </span>
                    <br />
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=C&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white"
                        }
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
                <br />
                <span className="profile-part-sub-head">Part2. Tech</span>
                <br />
                <ul>
                  <li>
                    <span className="profile-part-content">
                      🔍Intersted Tech
                    </span>
                    <br />
                    <div className="icon-wrap">
                      <img
                        src={
                          "https://img.shields.io/badge/web-000000?style=for-the-badge&logo=Mozilla&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/cloud-3693F3?style=for-the-badge&logo=iCloud&logoColor=white"
                        }
                        alt=""
                      />
                      <img
                        src={
                          "https://img.shields.io/badge/crypto-F7931A?style=for-the-badge&logo=Bitcoin&logoColor=white"
                        }
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-content-wrap margin-right-style">
              <div className="profile-content-part">
                <span className="profile-part-head">
                  Extra Curricular Activities
                </span>
              </div>
              <div className="profile-content-part">
                <span className="profile-part-sub-head">
                  2022 HUFS SW Volunteer
                </span>
                <br />
                <ul>
                  <li>
                    <span className="profile-part-content">
                      Maker in HUFS 웹 개발 멘토
                    </span>
                  </li>
                  <li>
                    <span className="profile-part-content">
                      HUFS X 설악고등학교 SW진로체험교육 강사
                    </span>
                  </li>
                </ul>
              </div>
              <div className="profile-content-part">
                <span className="profile-part-sub-head">
                  COMENTO 직무부트캠프
                </span>
                <br />
                <ul>
                  <li>
                    <span className="profile-part-content">
                      스타트업에서 프론트엔드 개발자로 일하기
                    </span>
                  </li>
                </ul>
              </div>
              <div className="profile-content-part">
                <span className="profile-part-sub-head">
                  2022 컴퓨터 사고와 코딩 수업 학부생 조교
                </span>
              </div>
              <div className="profile-content-part">
                <span className="profile-part-sub-head">
                  2021 HUFS Gnuvil 프로그래밍 중앙 동아리 부원
                </span>
                <br />
                <ul>
                  <li>
                    <span className="profile-part-content">
                      알고리즘, 인공지능 스터디
                    </span>
                  </li>
                </ul>
              </div>
              <div className="profile-content-part">
                <span className="profile-part-sub-head">
                  2020 이커머스특화대학 전자상거래 실습 장학생
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 프로필 콘텐츠 더 보기 + 반짝반짝 효과 */}
        <a
          href="#show-more"
          className="slide-to-see-down blink-effect"
          onClick={() => clickToSeeMore()}
        >
          <img
            src={require("../static/component/triangleDown.png")}
            alt="삼각형(하)"
          />
          <span>click to see more</span>
        </a>

        <img
          className="arrow-left"
          src={require("../static/component/arrow-left.png")}
          alt="화살표(왼)"
          onClick={() => moveToPage()}
        />
        <img
          className="arrow-right"
          src={require("../static/component/arrow-right.png")}
          alt="화살표(오)"
          onClick={() => moveToPage("/Profile")}
        />
      </div>
    </>
  );
}

export default ProfilePage;
