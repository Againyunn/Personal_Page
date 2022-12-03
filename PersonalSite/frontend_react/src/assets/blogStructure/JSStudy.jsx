import React from "react";

// blog data
import { javascriptStudyContent } from "assets/blogData/study/javascript";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Sidebar.css";
import { CodeBlock, dracula } from "react-code-blocks";

function JSStudy(props) {
  return javascriptStudyContent.map((el, idx) => {
    console.log("el:", el);
    return (
      <div
        className={`content-container ${!props.isFull ? "" : "is-full"}`}
        key={() => uuidv4()}
        // ref={(e) => (contentRef.current[0] = e)}
      >
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
                <span
                  className={`text ${el.color} ${el.bold}`}
                  key={() => uuidv4()}
                >
                  {el.content}
                </span>
              );
            }

            // code 형태
            else if (el.type === "code") {
              return (
                <CodeBlock
                  text={el.content}
                  language={"javascript"}
                  showLineNumbers={true}
                  // theme={dracula}
                  key={() => uuidv4()}
                />
              );
            }
          })}
        </div>
      </div>
    );
  });
}

export default JSStudy;
