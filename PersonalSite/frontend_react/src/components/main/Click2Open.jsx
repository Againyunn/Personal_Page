import React from "react";
import { useNavigate } from "react-router-dom";

// css
import "../../css/MainPage.css";

function Click2Open(props) {
  const navigate = useNavigate();

  const isSlideClicked = () => {
    setTimeout(() => {
      navigate("/profile");
    }, 300);
  };

  return (
    <div className="slide-wrap">
      <div className="slide-word-wrap blink-effect" onClick={isSlideClicked}>
        <img
          src={require("../../static/component/triangle.png")}
          alt="삼각형"
          className="slide-triangle"
        />
        <span className="slide-word">&nbsp;Click to Open!</span>
      </div>
    </div>
  );
}

export default Click2Open;
