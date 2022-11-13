import React from "react";

// data
import { sidebar } from "components/sidebar/sidebarData.js";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Sidebar.css";

function SidebarBlog(props) {
  return (
    <div className="sidebar-wrap">
      {sidebar.map((el, idx) => {
        return (
          <div className="sidebar-container">
            <span className="blue bold">{el.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarBlog;
