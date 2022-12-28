import React from "react";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/TextBounce.css";

function TextBounce(props) {
  return (
    <React.Fragment>
      <div className={`${!props.active ? "" : "text-bounce"}`}>
        {props.content.split("").map((el, idx) => {
          return <span key={`${el} ${idx}`}>{!el ? "1" : el}</span>;
        })}
      </div>
    </React.Fragment>
  );
}

export default TextBounce;
