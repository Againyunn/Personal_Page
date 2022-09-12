import { useState } from "react";
import { useRouter } from "next/router";
import { Image } from "react-bootstrap";

// css
import ProfilePageStyle from "@/styles/profile/ProfilePage.module.css";

function ProfileComponentSmall(props) {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const router = useRouter();

  const clickToSeeMore = () => {
    setIsSeeMore(true);
  };

  const moveToPage = (target = "/") => {
    router.push(target);
  };

  return (
    <div className={ProfilePageStyle.profileContainer}>
      <div
        className={`${ProfilePageStyle.profileWrap} ${ProfilePageStyle.contentUp}`}
      >
        <div
          className={`${ProfilePageStyle.profileContentWrap}
          `}
        >
          <Image
            className={ProfilePageStyle.profileImage}
            src="/assets/images/profile.jpg"
            alt=""
          />
          <div className={ProfilePageStyle.profileContentTitle}>
            <span className={ProfilePageStyle.profileTitleHead}>
              정재윤(Jaeyun Jung)
            </span>
            <br />
            <span className={ProfilePageStyle.profileTitleContent}>
              한국외국어대학교
            </span>
            <span className={ProfilePageStyle.profileTitleContent}>
              GBT학부
            </span>
            <span className={ProfilePageStyle.profileTitleContent}>
              컴퓨터.전자시스템공학부
            </span>
            <span className={ProfilePageStyle.profileTitleContent}>
              GPA: 4.09/4.5
            </span>
          </div>
        </div>

        <div className={ProfilePageStyle.profileContentPart}>
          <span className={ProfilePageStyle.profilePartHead}>Awards</span>
          <br />
          <span className={ProfilePageStyle.profilePartContent}>
            2022 SW공동해커톤 우수상(SW중심대학협회장상)수상
          </span>
          <span className={ProfilePageStyle.profilePartContent}>
            2021 GBT학부 캡스톤 디자인 경진대회 최우수상(경상대학장상)수상
          </span>
          <span className={ProfilePageStyle.profilePartContent}>
            2021 SBA 웹 개발 프로그램 최우수상 수상
          </span>

          <br />

          <span className={ProfilePageStyle.profilePartHead}>
            Work Experience
          </span>
          <br />
          <span className={ProfilePageStyle.profilePartContent}>
            긱스로프트 Web/App 개발 인턴(22.09.01 ~ 현재)
          </span>
          <span className={ProfilePageStyle.profilePartContent}>
            클루커스 MSP 헬프데스크(22.02.13 ~ 09.17)
          </span>
          <span className={ProfilePageStyle.profilePartContent}>
            위메프 O2O실 지원팀 사원(19.12.01 ~ 20.08.29/21.06.21 ~ 08.20)
          </span>
        </div>
      </div>
      {!isSeeMore ? (
        <></>
      ) : (
        <div
          className={`${ProfilePageStyle.profileWrap} ${ProfilePageStyle.contentDown}`}
        >
          <div className={ProfilePageStyle.profileContentWrap}>
            <div className={ProfilePageStyle.profileContentPart} id="showMore">
              <span className={ProfilePageStyle.profilePartHead}>Skills</span>
              <br />
              <span className={ProfilePageStyle.profilePartSubHead}>
                Part1. Use & Studying
              </span>
              <ul>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    🛠Web/App Development
                  </span>
                  <br />
                  <div className={ProfilePageStyle.iconWrap}>
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=MySql&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=Django&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white"
                      }
                      alt=""
                    />
                  </div>
                </li>
                <br />
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    ⚒Programming Languages
                  </span>
                  <br />
                  <div className={ProfilePageStyle.iconWrap}>
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=C&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white"
                      }
                      alt=""
                    />
                  </div>
                </li>
              </ul>
              <br />
              <span className={ProfilePageStyle.profilePartSubHead}>
                Part2. Tech
              </span>
              <br />
              <ul>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    🔍Intersted Tech
                  </span>
                  <br />
                  <div className={ProfilePageStyle.iconWrap}>
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/web-000000?style=for-the-badge&logo=Mozilla&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
                      src={
                        "https://img.shields.io/badge/cloud-3693F3?style=for-the-badge&logo=iCloud&logoColor=white"
                      }
                      alt=""
                    />
                    <Image
                      className={ProfilePageStyle.iconImg}
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
          <div
            className={`${ProfilePageStyle.profileContentWrap}
            ${ProfilePageStyle.marginRightStyle}`}
          >
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartHead}>
                Extra Curricular Activities
              </span>
            </div>
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartSubHead}>
                2022 HUFS SW Volunteer
              </span>
              <br />
              <ul>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    Maker in HUFS 웹 개발 멘토
                  </span>
                </li>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    HUFS X 설악고등학교 SW진로체험교육 강사
                  </span>
                </li>
              </ul>
            </div>
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartSubHead}>
                COMENTO 직무부트캠프
              </span>
              <br />
              <ul>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    스타트업에서 프론트엔드 개발자로 일하기
                  </span>
                </li>
              </ul>
            </div>
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartSubHead}>
                2022 컴퓨터 사고와 코딩 수업 학부생 조교
              </span>
            </div>
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartSubHead}>
                2021 HUFS Gnuvil 프로그래밍 중앙 동아리 부원
              </span>
              <br />
              <ul>
                <li>
                  <span className={ProfilePageStyle.profilePartContent}>
                    알고리즘, 인공지능 스터디
                  </span>
                </li>
              </ul>
            </div>
            <div className={ProfilePageStyle.profileContentPart}>
              <span className={ProfilePageStyle.profilePartSubHead}>
                2020 이커머스특화대학 전자상거래 실습 장학생
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 프로필 콘텐츠 더 보기 + 반짝반짝 효과 */}
      {!isSeeMore ? (
        <a
          href="#showMore"
          className={`${ProfilePageStyle.slideToSeeDown} ${ProfilePageStyle.blinkEffect}`}
          onClick={() => clickToSeeMore()}
        >
          <Image
            className={ProfilePageStyle.triangleImg}
            src="/assets/component/triangleDown.png"
            alt="삼각형(하)"
          />
          <span>click to see more</span>
        </a>
      ) : (
        <div></div>
      )}

      <Image
        className={ProfilePageStyle.arrowLeft}
        src="/assets/component/arrow-left.png"
        alt="화살표(왼)"
        onClick={() => moveToPage()}
      />
      <Image
        className={ProfilePageStyle.arrowRight}
        src="/assets/component/arrow-right.png"
        alt="화살표(오)"
        onClick={() => moveToPage("/ProfilePage")}
      />
    </div>
  );
}

export default ProfileComponentSmall;
