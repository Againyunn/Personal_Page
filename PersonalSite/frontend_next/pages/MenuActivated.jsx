import { useEffect } from "react";
import { useRouter } from "next/router";

// css
import MenuActivatedStyle from "@/styles/common/MenuActivated.module.css";

// redux connect
import { useDispatch } from "react-redux";
import { isMenuToggleActivated } from "@/store/reduxSlicer/menuToggle";

function MenuActivated() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // mount 시 작업
    document.body.style.backgroundColor = "#2B90D9";

    // unmount 시 작업
    return () => {
      document.body.style.backgroundColor = "#FFF";
    };
  }, []);

  async function moveToPage(target) {
    dispatch(isMenuToggleActivated(false));
    router.push(target);
  }

  return (
    <div className={MenuActivatedStyle.menuWrap}>
      <div
        className={MenuActivatedStyle.menuIndex}
        onClick={() => moveToPage("/ProfilePage")}
      >
        <span className={MenuActivatedStyle.menuContent}>개인 프로필</span>
      </div>
      <div
        className={MenuActivatedStyle.menuIndex}
        onClick={() => moveToPage("/PortfolioPage")}
      >
        <span className={MenuActivatedStyle.menuContent}>포트폴리오</span>
      </div>
      <div
        className={MenuActivatedStyle.menuIndex}
        onClick={() => moveToPage("/InterestVisionPage")}
      >
        <span className={MenuActivatedStyle.menuContent}>관심사.비전</span>
      </div>
    </div>
  );
}

MenuActivated.header = "H1";
export default MenuActivated;
