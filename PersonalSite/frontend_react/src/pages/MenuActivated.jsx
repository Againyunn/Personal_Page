import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import "../css/MenuActivated.css";

function MenuActivated(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // mount 시 작업
    document.body.style.backgroundColor = "#2B90D9";

    // unmount 시 작업
    return () => {
      document.body.style.backgroundColor = "#FFF";
    };
  }, []);

  const moveToPage = (target) => {
    navigate(target);
  };

  return (
    <div class="menu-wrap">
      <div class="menu-index" onClick={moveToPage("/Profile")}>
        <span class="menu-content">개인 프로필</span>
      </div>
      <div class="menu-index" onCclick={moveToPage("/Portfolio")}>
        <span class="menu-content">포트폴리오</span>
      </div>
      <div class="menu-index" onCclick={moveToPage("/InterestVision")}>
        <span class="menu-content">관심사.비전</span>
      </div>
    </div>
  );
}

export default MenuActivated;
