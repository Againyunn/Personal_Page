import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

// component
import SidebarBlog from "components/sidebar/SidebarBlog";
import BlogStudy from "assets/blogStructure/BlogStudy";
import LoadAnimation from "components/loadSpinner/LoadAnimation";

// css
import "static/style/css/Common.css";
import "static/style/css/ContentPage.css";
import "static/style/css/Hamburger.css";

function Blog(props) {
  const [sidebarController, setSidebarController] = useState(false);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // query-string 접근
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedContent, setSelectedContent] = useState(
    !searchParams.get("filter-id") ? "cs" : searchParams.get("filter-id")
  );

  const sideRef = useRef();

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

  useEffect(() => {
    setSidebarController(false);
  }, [selectedContent]);

  return (
    <div className="content-wrap">
      {!isDataLoaded ? null : (
        <React.Fragment>
          {/* 반응형 햄버거 버튼 및 사이드 바 노출 기능 */}
          <div
            className={`notice-word blink-effect ${
              !sidebarController ? "" : "in-active"
            }`}
          >
            <div>&nbsp;Blog</div>
            <div>menu</div>
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
        <div className="set-center">
          <div className="load-animation">
            <LoadAnimation />
          </div>
        </div>
      ) : (
        <BlogStudy isFull={!sidebarController} />
      )}
    </div>
  );
}

export default Blog;
