import { useRef, Component } from "react";
import Swal from "sweetalert2";
import { Image } from "react-bootstrap";

// css
import MainPageStyle from "@/styles/mainPage/MainPage.module.css";

function MainContent(props) {
  // reach HTML Dom with Ref function
  const gmailAddress = useRef();

  const clickGithub = () => {
    window.open("https://github.com/Againyunn");
  };

  const clickInstagram = () => {
    window.open("https://www.instagram.com/again_yunn/");
  };

  const clickGmail = () => {
    var content = gmailAddress.current.innerHTML;

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
    <div className={MainPageStyle.maincontentWrap}>
      <Image
        id={MainPageStyle.pictureProfile}
        src="/assets/images/picture_profile.jpg"
        alt="이미지_정재윤"
      />
      <div className={MainPageStyle.slogunWrap}>
        <span className={MainPageStyle.slogunWord}>성실함을 무기로,</span>
        <span className={MainPageStyle.slogunWord}>
          개선과 창조를 만들어가는 개발자
        </span>
        <div className={MainPageStyle.iconWrap}>
          <Image
            src="/assets/images/github.png"
            alt="github"
            className={MainPageStyle.icon}
            onClick={clickGithub}
          />
          <Image
            src="assets/images/instagram.png"
            alt="instagram"
            className={MainPageStyle.icon}
            onClick={clickInstagram}
          />
          <Image
            src="/assets/images/gmail.png"
            alt="gmail"
            className={MainPageStyle.icon}
            onClick={clickGmail}
          />
          <textarea
            ref={gmailAddress}
            defaultValue={"rangyun36@gmail.com"}
            hidden
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
