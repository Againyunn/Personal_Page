import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// css
import "static/style/css/MenuActivated.css";

// redux
import { connect, useSelector } from "react-redux";
import * as action from "../redux/action";

const mapStateToProps = (state) => {
  return {
    activate: state.activate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    menuToggle: (activate) => dispatch(action.menuToggle({ activate })),
  };
};

function MenuActivated({ activate, menuToggle }) {
  // useEffect(() => {
  //   // mount 시 작업
  //   document.body.style.backgroundColor = "#2B90D9";

  //   // unmount 시 작업
  //   return () => {
  //     document.body.style.backgroundColor = "#FFF";
  //   };
  // }, []);
  const navigate = useNavigate();
  const pageFrame = useRef();

  useEffect(() => {
    console.log("menuToggle: ", activate);
    if (!activate) {
      pageFrame.current.classList.remove("slide-down-focus-in");
      pageFrame.current.classList.add("slide-up-focus-out");
    } else {
      pageFrame.current.classList.add("slide-down-focus-in");
    }
  }, [activate]);

  async function moveToPage(target) {
    menuToggle(false);
    navigate(target);
  }

  return (
    <div ref={pageFrame} className="menu-wrap">
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuActivated);
