import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// css
import "static/style/css/MenuActivated.css";

// redux
import { connect } from "react-redux";
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
  const navigate = useNavigate();
  const pageFrame = useRef([]);

  useEffect(() => {
    // console.log("menuToggle: ", activate);
    if (!activate) {
      pageFrame.current[0].classList.remove("slide-down-focus-in");
      pageFrame.current[0].classList.add("slide-up-focus-out");

      pageFrame.current[1].classList.add("un-visible");
    } else {
      pageFrame.current[0].classList.add("slide-down-focus-in");
      pageFrame.current[1].classList.add("fade-in");
    }
  }, [activate]);

  async function moveToPage(target) {
    menuToggle(false);
    navigate(target);
  }

  useEffect(() => {
    // 메뉴 버튼 활성화 없이 url로 접근하는 경우
    if (!activate) {
      navigate("/");
      pageFrame.current[0].classList.add("slide-down-focus-in");
      pageFrame.current[1].classList.add("fade-in");
      return;
    }
  }, []);

  return (
    <div ref={(el) => (pageFrame.current[0] = el)} className="menu-wrap">
      <div
        ref={(el) => (pageFrame.current[1] = el)}
        className="menu-index"
        onClick={() => moveToPage("/profile")}
      >
        <span className="menu-content">개인 프로필</span>
      </div>
      <div
        ref={(el) => (pageFrame.current[1] = el)}
        className="menu-index"
        onClick={() => moveToPage("/portfolio")}
      >
        <span className="menu-content">포트폴리오</span>
      </div>
      <div
        ref={(el) => (pageFrame.current[1] = el)}
        className="menu-index"
        onClick={() => moveToPage("/blog")}
      >
        <span className="menu-content">기록.공부</span>
      </div>
      {/* <div
        ref={(el) => (pageFrame.current[1] = el)}
        className="menu-index"
        onClick={() => moveToPage("/interest-vision")}
      >
        <span className="menu-content">관심사.비전</span>
      </div> */}

      <span className="go-to-main" onClick={() => moveToPage("/")}>
        go to main
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuActivated);
