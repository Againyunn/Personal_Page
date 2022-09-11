import React from "react";
import { useRouter } from "next/router";
import { Image } from "react-bootstrap";

// css
import MainPageStyle from "@/styles/mainPage/MainPage.module.css";

function Click2Open(props) {
  const router = useRouter();

  const isSlideClicked = () => {
    setTimeout(() => {
      router.push("/ProfilePage");
    }, 300);
  };

  return (
    <div className={MainPageStyle.slideWrap}>
      <div
        className={`${MainPageStyle.slideWordWrap} ${MainPageStyle.blinkEffect}`}
        onClick={isSlideClicked}
      >
        <Image
          src="/assets/component/triangle.png"
          alt="삼각형"
          className={MainPageStyle.slideTriangle}
        />
        <span className={MainPageStyle.slideWord}>&nbsp;Click to Open!</span>
      </div>
    </div>
  );
}

export default Click2Open;
