import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "../css/Header.css";

function Header(props) {
  const [headerChange, setHeaderChange] = useState(false);
  const [menuFont, setMenuFont] = useState("메뉴");

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
  };

  const clickedMenu = () => {
    if (menuFont === "메뉴") {
      setMenuFont("닫기");
      setHeaderChange(true);

      navigate("/MenuActivated");
    } else {
      setMenuFont("메뉴");
      setHeaderChange(false);

      //과거 페이지로 복귀
      window.history.go(-1);
    }
  };

  return (
    <div className="header-wrap">
      {/* 헤더 */}
      {!headerChange ? (
        <header className="header-basic">
          <div className="main-logo" onClick={moveToMain}>
            <span className="big-font">Againyunn</span>
            <span className="small-font">FrontEnd Dev</span>
          </div>
        </header>
      ) : (
        <header className="header-changed" onClick={moveToMain}>
          <div className="main-logo-changed">
            <span className="big-font">Againyunn</span>
            <span className="small-font">FrontEnd Dev</span>
          </div>
        </header>
      )}

      {/* 메뉴 토글 */}
      <div id="menu-toggle">
        <input
          type="checkbox"
          id="toggle"
          checked={headerChange}
          onChange={clickedMenu}
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

export default Header;
