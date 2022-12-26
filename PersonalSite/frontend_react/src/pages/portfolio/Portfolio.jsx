import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// components
import ItemAccordionContainer from "components/itemAccordian/ItemAccordionContainer";

// data
import { portfolioData } from "pages/portfolio/portfolioData/portfolioData";
import TagBlock from "components/tag/TagBlock";
import BookmarkBlock from "components/bookmark/BookmarkBlock";

// css
import "static/style/css/Common.css";
import { Toast, Image } from "react-bootstrap";

function Portfolio(props) {
  const [initialToast, setInitialToast] = useState(false);

  const [scroll, setScroll] = useState(0);
  const [thisBrowserHeight, setThisBrowserHeight] = useState(0);

  const [textBounceEffect, setTextBounceEffect] = useState(true);

  const [arrowActivate, setArrowActivate] = useState([]);

  const navigate = useNavigate();

  // spinner test
  useEffect(() => {
    setTimeout(() => {
      setInitialToast(true);
    }, 300);

    setTimeout(() => {
      setInitialToast(false);
    }, 5000);

    window.addEventListener("scroll", handleScroll);

    setThisBrowserHeight(Math.min(window.innerHeight, window.innerWidth));

    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleTextBounce = () => {
    setTextBounceEffect(!textBounceEffect);
  };

  const moveToPage = (target = "/") => {
    navigate(target);
  };

  const detailActive = (type) => {
    if (!type) {
      let prevArrowActivate = [...arrowActivate];
      prevArrowActivate.pop();
      setArrowActivate(prevArrowActivate);
    } else setArrowActivate([...arrowActivate, type]);
  };

  return (
    <React.Fragment>
      <Toast show={initialToast} className="notice-toast">
        <Toast.Header className="notice-toast-header">
          <strong className="me-auto">Notice</strong>
        </Toast.Header>
        <Toast.Body>
          <span className="notice-toast-content" style={{ color: "#fff;" }}>
            각 프로젝트를 클릭하시면 자세한 내용을 볼 수 있어요!
          </span>
        </Toast.Body>
      </Toast>

      {portfolioData.map((el, idx) => {
        return (
          <BookmarkBlock
            key={() => uuidv4()}
            activate={
              scroll < (idx + 1) * thisBrowserHeight && textBounceEffect
            }
            rightLeft={idx / 2}
            blockHeight={thisBrowserHeight}
            githubUrl={el["title-content"].githubUrl}
            sourceUrl={el["title-content"].sourceUrl}
            serviceUrl={
              !el["title-content"].serviceUrl
                ? false
                : el["title-content"].serviceUrl
            }
            icon={el["title-content"].icon}
            title={el["title-content"].title}
            desrciption={el["title-content"]["brief-discription"]}
            belong={el["title-content"].belong}
            role={el["body-content"]["my-role"]}
            startDate={el["title-content"].period.start}
            endDate={el["title-content"].period.end}
            imageSrc={!el["body-content"].img ? false : el["body-content"].img}
            tagObject={
              !el["body-content"].techStack
                ? false
                : el["body-content"].techStack
            }
            isDetailActive={detailActive}
          />
          // { idx !== portfolioData.length - 1 ? <hr /> : null }
        );
      })}

      {arrowActivate.length !== 0 ? null : (
        <React.Fragment>
          <Image
            className="arrowLeft"
            src={require("static/component/arrow-left.png")}
            alt="화살표(왼)"
            onClick={() => moveToPage("/profile")}
          />
          <Image
            className="arrowRight"
            src={require("static/component/arrow-right.png")}
            alt="화살표(오)"
            onClick={() => moveToPage("/blog")}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Portfolio;
