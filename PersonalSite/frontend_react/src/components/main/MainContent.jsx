import React from "react";

// component
import ImageSwap from "components/animation/imageSwap/ImageSwap";

// css
import "static/style/css/MainPage.css";
import Swal from "sweetalert2";

function MainContent(props) {
  const clickGithub = () => {
    window.open("https://github.com/Againyunn");
  };

  const clickInstagram = () => {
    window.open("https://www.instagram.com/again_yunn/");
  };

  const clickGmail = () => {
    var content = document.getElementById("gmailAddress").innerHTML;

    navigator.clipboard
      .writeText(content)
      .then(() => {
        Swal.fire({
          text: "이메일이 복사되었습니다.",
          showCancelButton: false,
          confirmButtonText: `확인`,
          confirmButtonColor: "#2B90D9",
        });
      })
      .catch((e) => {
        console.log("이메일 복사 오류:", e);
      });
  };

  return (
    <div className="maincontent-wrap">
      <ImageSwap frontImage={"picture_profile.jpg"} backImage={"profile.jpg"} />
      <div className="container">
        <div className="slogun-wrap">
          <span className="slogun-word">
            I like to convert ideas that I imagined into reality and keep
            pushing forward
          </span>
          {/* <span className="slogun-word">개선과 창조를 만들어가는 개발자</span> */}
          <div className="icon-wrap">
            <img
              src={require("../../static/img/github.png")}
              alt="github"
              // className="icon"
              onClick={clickGithub}
            />
            <img
              src={require("../../static/img/instagram.png")}
              alt="instagram"
              // className="icon"
              onClick={clickInstagram}
            />
            <img
              src={require("../../static/img/gmail.png")}
              alt="gmail"
              // className="icon"
              onClick={clickGmail}
            />
            <textarea
              id="gmailAddress"
              defaultValue={"rangyun36@gmail.com"}
              hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
