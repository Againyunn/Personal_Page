import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import "static/style/css/Header.css";

// redux
import { connect } from "react-redux";
import * as action from "redux/action";

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

function Header({ activate, menuToggle }) {
  const [headerChange, setHeaderChange] = useState(false);
  const [menuFont, setMenuFont] = useState("메뉴");

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("change1:", activate);
    clickedMenu();
    // console.log("change2:", activate);
  }, [activate]);

  const moveToMain = () => {
    navigate("/");
  };

  const clickedMenu = () => {
    if (activate === true) {
      setMenuFont("닫기");
      setHeaderChange(true);

      navigate("/menu-activated");
    } else {
      setMenuFont("메뉴");
      setHeaderChange(false);
    }
  };

  const changeMenuToggle = (type = false) => {
    if (activate) {
      menuToggle(false);
      // console.log("clicked,", activate);
      if (type === true) {
        setHeaderChange(false);
        //과거 페이지로 복귀
        // window.history.go(-1);
        setTimeout(() => {
          navigate(-1);
        }, 300);
      }
    } else {
      menuToggle(true);
      // console.log("clicked,", activate);
    }
  };

  return (
    <div className="header-wrap">
      {/* 헤더 */}
      {!headerChange ? (
        <header className="header-basic fade-out">
          <div className="main-logo" onClick={moveToMain}>
            <span className="big-font">Againyunn</span>
            <span className="small-font">FrontEnd Dev</span>
          </div>
        </header>
      ) : (
        <header className="header-changed">
          <div className="main-logo-changed">
            <span className="big-font fade-in">Againyunn</span>
            <span className="small-font fade-in">FrontEnd Dev</span>
          </div>
        </header>
      )}

      {/* 메뉴 토글 */}
      <div id="menu-toggle">
        <input
          type="checkbox"
          id="toggle"
          checked={headerChange}
          onChange={() => changeMenuToggle(true)}
          hidden
        />
        <span className="menu-font">{menuFont}</span>

        <label htmlFor="toggle" className="toggleSwitch">
          <span className="toggleButton"></span>
        </label>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
