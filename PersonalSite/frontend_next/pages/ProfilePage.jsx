import { useEffect, useState } from "react";

// 화면 크기별 컴포넌트
import ProfileComponentMax from "@/components/profile/ProfileComponentMax";
import ProfileComponentMid from "@/components/profile/ProfileComponentMid";

function ProfilePage(props) {
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

  // 화면 크기 별로 다른 컴포넌트 랜더링
  const RederingProfileContent = () => {
    // 테스트용
    console.log(displaySize);

    if (960 <= displaySize) {
      return <ProfileComponentMax />;
    } else if (720 <= displaySize && displaySize < 960) {
      return <ProfileComponentMid />;
    }
  };

  return <RederingProfileContent />;
}

ProfilePage.header = "H1";
export default ProfilePage;
