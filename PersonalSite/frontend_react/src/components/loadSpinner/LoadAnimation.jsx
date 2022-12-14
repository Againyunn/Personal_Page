import React from "react";

import "static/style/css/Common.css";

function LoadAnimation(props) {
  return (
    <lottie-player
      className="load-animation"
      src="https://lottie.host/73a8a730-2de9-41b1-aad2-603cdb7363a9/wPHRWaYO73.json"
      background="transparent"
      speed="1"
      style={{ width: "100px;", height: "100px;" }}
      loop
      autoplay
    ></lottie-player>
  );
}

export default LoadAnimation;
