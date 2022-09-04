import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import "../css/MenuActivated.css";

// redux
import { connect } from "react-redux";
import * as action from "../redux/action";

const mapDispatchToProps = (dispatch) => {
  return {
    menuToggle: (activate) => dispatch(action.menuToggle({ activate })),
  };
};

function MenuActivated({ menuToggle }) {
  useEffect(() => {
    // mount 시 작업
    document.body.style.backgroundColor = "#2B90D9";

    // unmount 시 작업
    return () => {
      document.body.style.backgroundColor = "#FFF";
    };
  }, []);
  const navigate = useNavigate();

  async function moveToPage(target) {
    menuToggle(false);
    navigate(target);
  }

  return (
    <div className="menu-wrap">
      <div className="menu-index" onClick={() => moveToPage("/Profile")}>
        <span className="menu-content">개인 프로필</span>
      </div>
      <div className="menu-index" onClick={() => moveToPage("/Portfolio")}>
        <span className="menu-content">포트폴리오</span>
      </div>
      <div className="menu-index" onClick={() => moveToPage("/InterestVision")}>
        <span className="menu-content">관심사.비전</span>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(MenuActivated);
