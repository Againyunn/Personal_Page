import React from "react";
import SidebarBlog from "components/sidebar/SidebarBlog";

// blog data
import { javascriptStudyContent } from "assets/blogData/study/javascript";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Sidebar.css";

function Blog(props) {
  const JSStudy = () => {
    return javascriptStudyContent.map((el, idx) => {
      console.log("el:", el);
      return (
        <div className="content-container">
          <div className="content-block">
            <span className="h1">{el.header.h1}</span>
            <span className="h2">{el.header.h2}</span>
            <span className="h3">
              {idx + 1}. {el.header.h3}
            </span>
            <br />
            {/* 본문 text */}
            {el.text.map((el, idx) => {
              // text 형태
              if (el.type === "text") {
                return (
                  <span className={`text ${el.color} ${el.bold}`}>
                    {el.content}
                  </span>
                );
              }

              // code 형태
              else if (el.type === "code") {
                return (
                  <pre className="code-wrap">
                    <code class="code-content">{el.content}</code>
                  </pre>
                );
              }
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="content-wrap">
      <SidebarBlog />
      <JSStudy />
    </div>
  );
}

export default Blog;