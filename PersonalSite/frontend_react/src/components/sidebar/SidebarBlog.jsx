import React, { useEffect, useRef } from "react";

// data
import { sidebar } from "components/sidebar/sidebarData.js";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Sidebar.css";

function SidebarBlog(props) {
  const sidebarRef = useRef([]);

  useEffect(() => {
    if (!props.isActive) {
      sidebarRef.current[0].classList.add("in-active");
    } else {
      sidebarRef.current[0].classList.remove("in-active");
    }
  }, [props.isActive]);

  return (
    <div className="sidebar-wrap" ref={(e) => (sidebarRef.current[0] = e)}>
      {sidebar.map((el, idx) => {
        return (
          <div className="sidebar-container" key={() => uuidv4()}>
            <span className="blue bold">{el.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarBlog;
