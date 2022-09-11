import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// css
import HeaderStyle from "@/styles/common/Header.module.css";

// redux connect
import { useDispatch, useSelector } from "react-redux";
import { isMenuToggleActivated } from "@/store/reduxSlicer/menuToggle";

function Header() {
  const [headerChange, setHeaderChange] = useState(false);
  const [menuFont, setMenuFont] = useState("메뉴");

  const router = useRouter();
  const dispatch = useDispatch();
  const activate = useSelector((state) => {
    return state.menuToggle.activate;
  });

  useEffect(() => {
    console.log("change1:", activate);
    clickedMenu();
    console.log("change2:", activate);
  }, [activate]);

  const moveToMain = () => {
    router.push("/");
  };

  const clickedMenu = () => {
    if (activate === true) {
      setMenuFont("닫기");
      setHeaderChange(true);

      router.push("/MenuActivated");
    } else {
      setMenuFont("메뉴");
      setHeaderChange(false);
    }
  };

  const changeMenuToggle = (type = false) => {
    if (activate) {
      dispatch(isMenuToggleActivated(false));
      console.log("clicked,", activate);
      if (type === true) {
        //과거 페이지로 복귀
        window.history.go(-1);
      }
    } else {
      dispatch(isMenuToggleActivated(true));
      console.log("clicked,", activate);
    }
  };

  return (
    <div className={HeaderStyle.headerWrap}>
      {/* 헤더 */}
      {!headerChange ? (
        <header className={HeaderStyle.headerBasic}>
          <div className={HeaderStyle.mainLogo} onClick={moveToMain}>
            <span className={HeaderStyle.bigFont}>Againyunn</span>
            <span className={HeaderStyle.smallFont}>FrontEnd Dev</span>
          </div>
        </header>
      ) : (
        <header className={HeaderStyle.headerChanged}>
          <div className={HeaderStyle.mainLogoChanged}>
            <span className={HeaderStyle.bigFont}>Againyunn</span>
            <span className={HeaderStyle.smallFont}>FrontEnd Dev</span>
          </div>
        </header>
      )}

      {/* 메뉴 토글 */}
      <div id={HeaderStyle.menuToggle}>
        <input
          type="checkbox"
          id={HeaderStyle.toggle}
          checked={headerChange}
          onChange={() => changeMenuToggle(true)}
          hidden
        />
        <span className={HeaderStyle.menuFont}>{menuFont}</span>

        <label
          htmlFor={HeaderStyle.toggle}
          className={HeaderStyle.toggleSwitch}
        >
          <span className={HeaderStyle.toggleButton}></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
