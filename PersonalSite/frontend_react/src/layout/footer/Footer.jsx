import React from "react";

//css
import Swal from "sweetalert2";
import "static/style/css/Footer.css";
import "static/style/css/PageAnimation.css";

function Footer(props) {
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
    <footer className="footer-wrap slide-up-focus-in">
      <div className="footer-container">
        <div className="footer-block">
          <span className="title">제작:</span>
          <span className="author">&nbsp;정재윤</span>
        </div>
        <div className="footer-block" onClick={() => clickGmail()}>
          <span className="title">문의:&nbsp;</span>
          <span className="email" id="gmailAddress">
            rangyun36@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
