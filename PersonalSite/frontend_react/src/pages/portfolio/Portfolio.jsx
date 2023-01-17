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
import "static/style/css/ContentPage.css";
import {
  Toast,
  Image,
  Accordion,
  Card,
  useAccordionButton,
} from "react-bootstrap";

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

    window.scrollTo(0, 0);

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

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        // style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

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

      {/* 개발 스타일 및 지향점 소개 */}
      {/* <Accordion defaultActiveKey="0">
        <Card>
          <CustomToggle eventKey="0">Click me!</CustomToggle>

          <Accordion.Collapse eventKey="0">
            <div className="brief-notice-wrap">
              <span className="notice-title">Brief Introduce</span>
              <span className="notice-text">안녕하세요.</span>
              <span className="notice-text">
                상상하고 기획한 것을 프로그래밍을 통해 현실로 가져오는 일을
                좋아하는 주니어 개발자입니다.
              </span>
              <span className="notice-text">
                불편함을 직접 바꿀 수 있는 일을 하고 싶어 프로그래밍을
                시작했기에, 개발의 목적으로 ‘사용자 친화적인 서비스’를
                지향합니다.
              </span>
              <span className="notice-text">
                나아가 개발자와 운영자 역시도 사용자에 포함된다는 생각으로
                재사용성과 확장성을 고려한 구조와 코드를 개발을 위해 노력합니다.
              </span>
              <span className="notice-text">
                주어진 기획안/업무는 시일 내에 반드시 해내며, 꾸준한 학습을 통해
                최선의 방법을 찾아 적용하며 성장하고 있습니다.
              </span>
              <br />
              <div className="horizental-line"></div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}

      {portfolioData.map((el, idx) => {
        return (
          <BookmarkBlock
            key={`${el} ${idx}`}
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
