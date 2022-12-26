import React from "react";

import "static/style/css/TextBounce.css";

function TextBounce(props) {
  return (
    <React.Fragment>
      <div className={`${!props.active ? "" : "text-bounce"}`}>
        {props.content.split("").map((el, idx) => {
          return <span>{el}</span>;
        })}
      </div>
    </React.Fragment>
  );
}

export default TextBounce;
