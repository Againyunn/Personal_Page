import React, { useState, useEffect, useRef } from "react";

// component
import SidebarBlog from "components/sidebar/SidebarBlog";
import BlogStudy from "assets/blogStructure/BlogStudy";
import LoadingSpinner from "components/loadSpinner/LoadSpinner";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Hamburger.css";

function Blog(props) {
  const [sidebarController, setSidebarController] = useState(false);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const sideRef = useRef();

  const [content, setContent] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (sidebarController) {
      const handleClickOutside = (e) => {
        console.log(e.target);
        console.log(
          "e.target.className.split(): ",
          e.target.className.split(" ")[0]
        );

        if (e.target.className !== "sidebar-wrap") {
          setSidebarController(!sidebarController);
        }
      };

      document.addEventListener("mousedown", (e) => handleClickOutside(e));
      return () => {
        document.removeEventListener("mousedown", (e) => handleClickOutside(e));
      };
    }
  }, [sideRef]);

  return (
    <div className="content-wrap set-relative">
      {!isDataLoaded ? null : (
        <React.Fragment>
          {/* 반응형 햄버거 버튼 및 사이드 바 노출 기능 */}
          <div
            className={`notice-word blink-effect ${
              !sidebarController ? "" : "in-active"
            }`}
          >
            menu
          </div>
          <div
            className="burger-menu"
            onClick={() => setSidebarController(!sidebarController)}
          >
            <div
              className={
                !sidebarController
                  ? "burger-bar unclicked"
                  : "burger-bar clicked"
              }
            ></div>
            <div
              className={
                !sidebarController
                  ? "burger-bar unclicked"
                  : "burger-bar clicked"
              }
            ></div>
            <div
              className={
                !sidebarController
                  ? "burger-bar unclicked"
                  : "burger-bar clicked"
              }
            ></div>
          </div>
        </React.Fragment>
      )}
      <SidebarBlog
        isActive={sidebarController}
        setIsActive={(e) => setSidebarController(e)}
        // ref={(e) => (sideRef.current[0] = e.target.className)}
      />
      {!isDataLoaded ? (
        <LoadingSpinner text={"Loading..."} />
      ) : (
        <BlogStudy isFull={!sidebarController} />
      )}
      ,
    </div>
  );
}

export default Blog;
