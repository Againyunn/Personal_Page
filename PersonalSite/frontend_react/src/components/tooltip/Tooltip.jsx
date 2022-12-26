import React from "react";

// css
import "static/style/css/tooltip.css";

/**
 *
 * @param {*string} title 툴팁의 대상
 * @param {*string} content 툴팁의 내용
 * @returns
 */
function Tooltip(props) {
  return (
    <div className="tooitip-container">
      <span className="tooltip-title">
        {props.title}
        <span className="tooltip-content">{props.content}</span>
      </span>
    </div>
  );
}

export default Tooltip;
