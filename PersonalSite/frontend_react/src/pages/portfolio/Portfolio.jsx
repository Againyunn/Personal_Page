import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import LoadAnimation from "components/loadSpinner/LoadAnimation";

// data
import { portfolioData } from "pages/portfolio/portfolioData/portfolioData";
import TagBlock from "components/tag/TagBlock";
import BookmarkBlock from "components/bookmark/BookmarkBlock";

// css
import "static/style/css/Common.css";
import "static/style/css/ContentPage.css";
import "static/style/css/Bookmark.css";
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
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [isShowFullNotionLink, setIsShowFullNotionLink] = useState(true);

  const navigate = useNavigate();

  // spinner test
  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 1000);

    setTimeout(() => {
      setInitialToast(true);
    }, 1000);

    setTimeout(() => {
      setInitialToast(false);
    }, 2000);

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
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setIsShowFullNotionLink(!isShowFullNotionLink);
    });

    return (
      <div type="button" onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }

  const clickNotion = () => {
    window.open(
      "https://againyunn.notion.site/e0c69a8235d341648f6288e083896c71?v=fb9160995c994dfdbd0d9b9966920745"
    );
  };

  return (
    <React.Fragment>
      {!isDataLoaded ? (
        <div className="set-center">
          <div className="load-animation">
            <LoadAnimation />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <Toast show={initialToast} className="notice-toast">
            <Toast.Header className="notice-toast-header">
              <strong className="me-auto">Notice</strong>
            </Toast.Header>
            <Toast.Body>
              <span className="notice-toast-content" style={{ color: "#fff" }}>
                각 프로젝트를 클릭하시면 자세한 내용을 볼 수 있어요!
              </span>
            </Toast.Body>
          </Toast>

          {/* 전체 포트폴리오 한번에 보기 */}

          {/* 개발 스타일 및 지향점 소개 */}
          <div className="brief-notice-container">
            <Accordion className="brief-notice-accordion" defaultActiveKey="0">
              {/* <Card> */}
              <CustomToggle eventKey="0">
                {!isShowFullNotionLink ? (
                  <React.Fragment className="brief-notice-wrap">
                    <img
                      src={require("static/component/reading-glasses.png")}
                      alt="보기"
                      width={20}
                    />
                    <span className="notice-title">
                      프로젝트 전체 노션 링크 보기
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment className="brief-notice-wrap">
                    <span className="notice-title red-text">
                      &nbsp;프로젝트 전체 노션 링크 숨기기
                    </span>
                  </React.Fragment>
                )}
              </CustomToggle>

              <Accordion.Collapse eventKey="0">
                <div
                  className="brief-notice-wrap"
                  onClick={() => clickNotion()}
                >
                  <img
                    src={require("static/img/notion_origin.png")}
                    alt="노션"
                  />
                  <span className="notice-text blink-effect">
                    전체 포트폴리오 NOTION Link
                  </span>
                </div>
              </Accordion.Collapse>
              {/* </Card> */}
            </Accordion>
          </div>

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
                imageSrc={
                  !el["body-content"].img ? false : el["body-content"].img
                }
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
      )}
    </React.Fragment>
  );
}

export default Portfolio;
