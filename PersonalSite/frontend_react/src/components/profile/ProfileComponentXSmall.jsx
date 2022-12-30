import { useState } from "react";
import { useNavigate } from "react-router-dom";

// component
import AutoImageSwap from "components/animation/imageSwap/AutoImageSwap";
import FingerAnimation from "components/animation/effect/FingerAnimation";

// css
import "static/style/css/ProfilePage.css";
import { Image } from "react-bootstrap";

function ProfileComponentSmall(props) {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const navigate = useNavigate();

  const clickToSeeMore = () => {
    setIsSeeMore(true);
  };

  const moveToPage = (target = "/") => {
    navigate(target);
  };

  return (
    <div className="profileContainer">
      <div className="profileWrap contentUp">
        <div className="profileContentWrap">
          <AutoImageSwap
            frontImage={"picture_profile.jpg"}
            backImage={"profile.jpg"}
          />
          {/* <Image className="profileImage" src={profileImg} alt="" /> */}
          <div className="profileContentTitle">
            <span className="profileTitleHead">정재윤(Jaeyun Jung)</span>
            <br />
            <span className="profileTitleContent">한국외국어대학교</span>
            <span className="profileTitleContent">GBT학부</span>
            <span className="profileTitleContent">컴퓨터.전자시스템공학부</span>
            <span className="profileTitleContent">GPA: 4.09/4.5</span>
          </div>
        </div>

        <div className="profileContentPart">
          <span className="profilePartHead">🏆Awards</span>
          <br />
          <span className="profilePartContent">
            2022 SW공동해커톤 우수상(SW중심대학협회장상)수상
          </span>
          <span className="profilePartContent">
            2021 GBT학부 캡스톤 디자인 경진대회 최우수상(경상대학장상)수상
          </span>
          <span className="profilePartContent">
            2021 SBA 웹 개발 프로그램 최우수상 수상
          </span>

          <br />

          <span className="profilePartHead">🖥Work Experience</span>
          <br />
          <span className="profilePartContent">
            긱스로프트 Web/App 개발 인턴(22.09.01 ~ 현재)
          </span>
          <span className="profilePartContent">
            클루커스 MSP 헬프데스크(22.02.13 ~ 09.17)
          </span>
          <span className="profilePartContent">
            위메프 O2O실 지원팀 사원(19.12.01 ~ 20.08.29/21.06.21 ~ 08.20)
          </span>
        </div>
      </div>
      {!isSeeMore ? (
        <></>
      ) : (
        <div className="profileWrap contentDown">
          <div className="profileContentWrapBottom">
            <div className="profileContentPart" id="showMore">
              <span className="profilePartHead">Skills</span>
              <br />
              <span className="profilePartSubHead">Part1. Use & Studying</span>
              {/* <ul className="insideMarker noMarker"> */}

              <span className="profilePartContent">🛠Web/App Development</span>
              <br />
              <div className="iconWrap">
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=MySql&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=Django&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white"
                  }
                  alt=""
                />
              </div>

              <br />

              <span className="profilePartContent">⚒Programming Languages</span>
              <br />
              <div className="iconWrap">
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=C&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white"
                  }
                  alt=""
                />
              </div>

              {/* </ul> */}

              <br />
              <span className="profilePartSubHead">Part2. Tech</span>

              <span className="profilePartContent">🔍Intersted Tech</span>
              <br />
              <div className="iconWrap">
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/web-000000?style=for-the-badge&logo=Mozilla&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/cloud-3693F3?style=for-the-badge&logo=iCloud&logoColor=white"
                  }
                  alt=""
                />
                <Image
                  className="iconImg"
                  src={
                    "https://img.shields.io/badge/crypto-F7931A?style=for-the-badge&logo=Bitcoin&logoColor=white"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="profileContentWrapBottom">
            <div className="profileContentPart">
              <span className="profilePartHead">
                Extra Curricular Activities
              </span>
            </div>
            <div className="profileContentPart">
              <span className="profilePartSubHead">2022 HUFS SW Volunteer</span>

              <span className="profilePartContent">
                Maker in HUFS 웹 개발 멘토
              </span>

              <span className="profilePartContent">
                HUFS X 설악고등학교 SW진로체험교육 강사
              </span>
            </div>
            <div className="profileContentPart">
              <span className="profilePartSubHead">COMENTO 직무부트캠프</span>

              <span className="profilePartContent">
                스타트업에서 프론트엔드 개발자로 일하기
              </span>
            </div>
            <div className="profileContentPart">
              <span className="profilePartSubHead">
                2022 컴퓨터 사고와 코딩 수업 학부생 조교
              </span>
            </div>
            <div className="profileContentPart">
              <span className="profilePartSubHead">
                2021 HUFS Gnuvil 프로그래밍 중앙 동아리 부원
              </span>

              <span className="profilePartContent">
                알고리즘, 인공지능 스터디
              </span>
            </div>
            <div className="profileContentPart">
              <span className="profilePartSubHead">
                2020 이커머스특화대학 전자상거래 실습 장학생
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 프로필 콘텐츠 더 보기 + 반짝반짝 효과 */}
      {!isSeeMore ? (
        <div onClick={() => clickToSeeMore()}>
          <a href="#showMore" className="slideToSeeDown blinkEffect">
            {/* <Image
            className="triangleImg"
            src={require("static/component/triangleDown.png")}
            alt="삼각형(하)"
          /> */}
            <div className="triangleImg">
              <FingerAnimation />
            </div>
            <span>click to see more</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}

      <Image
        className="arrowLeft"
        src={require("static/component/arrow-left.png")}
        alt="화살표(왼)"
        onClick={() => moveToPage()}
      />
      <Image
        className="arrowRight"
        src={require("static/component/arrow-right.png")}
        alt="화살표(오)"
        onClick={() => moveToPage("/portfolio")}
      />
    </div>
  );
}

export default ProfileComponentSmall;
