import React from "react";

// css
import "static/style/css/ImageSwap.css";

function AutoImageSwap(props) {
  return (
    <div className="auto-swap-container">
      <div className="auto-item front">
        <img
          src={require(`static/img/${props.frontImage}`)}
          alt={props.frontImage}
        />
      </div>
      <div className="auto-item back">
        <img
          src={require(`static/img/${props.backImage}`)}
          alt={props.backImage}
        />
      </div>
    </div>
  );
}

export default AutoImageSwap;
