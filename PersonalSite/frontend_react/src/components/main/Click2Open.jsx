import React from "react";
import { useNavigate } from "react-router-dom";

// css
import "static/style/css/MainPage.css";

function Click2Open(props) {
  const navigate = useNavigate();

  const isSlideClicked = () => {
    props.isClicked(true);
    setTimeout(() => {
      navigate("/profile#showMore");
    }, 500);
  };

  return (
    <div className="slide-wrap">
      <div className="slide-word-wrap blink-effect" onClick={isSlideClicked}>
        <img
          src={require("../../static/component/triangle.png")}
          alt="삼각형"
          className="slide-triangle"
        />
        <span className="slide-word">&nbsp;Click to see more!</span>
      </div>
    </div>
  );
}

export default Click2Open;
