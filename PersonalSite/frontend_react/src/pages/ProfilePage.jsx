import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProfileComponentMax from "components/profile/ProfileComponentMax";
import ProfileComponentMid from "components/profile/ProfileComponentMid";
import ProfileComponentSmall from "components/profile/ProfileComponentSmall";
import ProfileComponentXSmall from "components/profile/ProfileComponentXSmall";

// layout
import Footer from "layout/footer/Footer";

// image
import profileImg from "static/img/profile.jpg";

// css
import "static/style/css/PageAnimation.css";
import "static/style/css/ProfilePage.css";

function ProfilePage(props) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [displaySize, setDisplaySize] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      let screenWidth = window.innerWidth;
      setDisplaySize(screenWidth);
    };

    if (displaySize === false) {
      return checkScreenSize();
    }

    window.onload = () => {
      checkScreenSize();
    };

    window.onresize = () => {
      checkScreenSize();
    };
  });

  useEffect(() => {
    RederingProfileContent();
  }, [displaySize]);

  const pageFrame = useRef();

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const clickToSeeMore = () => {
    setIsSeeMore(true);
  };

  const moveToPage = (target = "/") => {
    pageFrame.current.classList.remove("slide-left-focus-in");
    pageFrame.current.classList.add("slide-right-focus-out");
    setTimeout(() => {
      navigate(target);
    }, 700);
  };
  // 화면 크기 별로 다른 컴포넌트 랜더링
  const RederingProfileContent = () => {
    // 테스트용
    console.log(displaySize);

    if (960 <= displaySize) {
      return <ProfileComponentMax />;
    } else if (720 <= displaySize && displaySize < 960) {
      return <ProfileComponentMid />;
    } else if (480 <= displaySize && displaySize < 720) {
      return <ProfileComponentSmall />;
    } else return <ProfileComponentXSmall />;
  };

  return <RederingProfileContent />;
}

export default ProfilePage;
