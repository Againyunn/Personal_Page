import React from "react";

import "static/style/css/Common.css";
// import animationData from "components/loadSpinner/loading/loadingEffect";

function LoadAnimation(props) {
  return (
    <lottie-player
      className="load-animation"
      src="https://lottie.host/42d6106f-dea5-45be-bb29-413e22aa7fe8/bAqhGLp1KN.json"
      background="transparent"
      speed="1"
      height={50}
      width={50}
      loop
      autoplay
    ></lottie-player>
  );
}

export default LoadAnimation;
