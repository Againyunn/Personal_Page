import ProfileComponentMax from "components/pofile/ProfileComponentMax";
import { useEffect } from "react";
import { useState } from "react";

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

  const RederingProfileContent = () => {
    if (displaySize > 1200) {
      return <ProfileComponentMax />;
    }
  };

  return <RederingProfileContent />;
}

ProfilePage.header = "H1";
export default ProfilePage;
