import React from "react";

// css
import "static/style/css/ImageSwap.css";

function AutoImageSwap(props) {
  return (
    <div className="swap-container">
      <div className="item front">
        <img
          src={require(`static/img/${props.frontImage}`)}
          alt={props.frontImage}
        />
      </div>
      <div className="item back">
        <img
          src={require(`static/img/${props.backImage}`)}
          alt={props.backImage}
        />
      </div>
    </div>
  );
}

export default AutoImageSwap;
