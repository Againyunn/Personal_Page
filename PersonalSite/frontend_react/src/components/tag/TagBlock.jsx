import React from "react";

// css
import "static/style/css/NotionStyle.css";

/**
 *
 * @param {*} title
 * @param {*} color : defualt, yellow, orange, blue, green, purple, pink
 * @returns
 */
function TagBlock({ title, color }) {
  return (
    <div>
      <span class={`selected-value select-value-color-${color}`}>{title}</span>
    </div>
  );
}

export default TagBlock;
