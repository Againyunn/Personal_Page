import React, { useEffect, useState } from "react";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// components
import ItemAccordionContainer from "components/itemAccordian/ItemAccordionContainer";
import { Toast } from "react-bootstrap";

// data
import { portfolioData } from "pages/portfolio/portfolioData/portfolioData";
import TagBlock from "components/tag/TagBlock";
import BookmarkBlock from "components/bookmark/BookmarkBlock";

// import ProjectBlock from "components/projectBlock/ProjectBlock";

// css
import "static/style/css/Common.css";

function Portfolio(props) {
  const [initialToast, setInitialToast] = useState(false);

  const [scroll, setScroll] = useState(0);
  const [thisBrowserHeight, setThisBrowserHeight] = useState(0);

  const [textBounceEffect, setTextBounceEffect] = useState(true);

  // spinner test
  useEffect(() => {
    setTimeout(() => {
      setInitialToast(true);
    }, 300);

    setTimeout(() => {
      setInitialToast(false);
    }, 5000);

    window.addEventListener("scroll", handleScroll);

    setThisBrowserHeight(window.innerHeight);

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

  return (
    <React.Fragment>
      <Toast show={initialToast} className="notice-toast">
        <Toast.Header className="notice-toast-header">
          {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
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
          />
          // { idx !== portfolioData.length - 1 ? <hr /> : null }
        );
      })}
    </React.Fragment>
  );
}

export default Portfolio;
