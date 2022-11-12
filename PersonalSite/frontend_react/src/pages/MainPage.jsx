import React, { useEffect, useState, useRef } from "react";
import Click2Open from "components/main/Click2Open";
import MainContent from "components/main/MainContent";

// css
import "static/style/css/PageAnimation.css";

function MainPage(props) {
  const [moveNextPage, setMoveNextPage] = useState(false);

  const pageFrame = useRef();

  useEffect(() => {
    if (moveNextPage) {
      pageFrame.current.classList.remove("fade-in");
      pageFrame.current.classList.add("slide-left-focus-out");
    }
  }, [moveNextPage]);

  const isClicked = (e) => {
    setMoveNextPage(e);
  };

  return (
    <div className="fade-in" ref={pageFrame}>
      <MainContent />
      <Click2Open isClicked={isClicked} />
    </div>
  );
}

export default MainPage;
