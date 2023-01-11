import React, { useState, useRef } from "react";

// component
import TagBlock from "components/tag/TagBlock";
import TextBounce from "components/animation/textBounce/TextBounce";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/NotionStyle.css";
import "static/style/css/Bookmark.css";
import "static/style/css/Common.css";
import "static/css/transition.css";

// transition
import { CSSTransition } from "react-transition-group";

// bootstrap
import { Carousel, Alert } from "react-bootstrap";
import { useEffect } from "react";

/**
 * 북마크 블록 생성 컴포넌트
 * @param {*string} sourceUrl
 * @param {*string} title
 * @param {*string} desrciption
 * @param {*string} role
 * @param {*string} startDate
 * @param {*string} endDate
 * @param {*string} imageSrc
 * @param {*object} tagObject / title, color
 * @returns
 */

function BookmarkBlock({
  activate,
  sourceUrl,
  githubUrl,
  serviceUrl,
  icon,
  title,
  desrciption,
  belong,
  role,
  startDate,
  endDate,
  imageSrc,
  tagObject,
  blockHeight,
  isDetailActive,
}) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const nodeRef = useRef(null);

  const moveToLink = (targetUrl) => {
    window.open(targetUrl);
  };

  useEffect(() => {
    isDetailActive(showMessage);
  }, [showMessage]);

  return (
    <React.Fragment>
      {showButton && (
        <div
          className="bookmark-simple-wrap"
          style={{ height: `${blockHeight}px` }}
          onClick={() => setShowMessage(true)}
        >
          <div className="bookmark-simple-title">
            <TextBounce content={title} active={activate} />
          </div>
          <div className="bookmark-simple-description">{desrciption}</div>
          <div className="bookmark-simple-image-wrap">
            <Carousel
              interval={2500}
              nextIcon={null}
              prevIcon={null}
              indicators={false}
              // slide={false}
              className=""
            >
              {imageSrc.map((imgEl) => {
                return (
                  <Carousel.Item>
                    <img
                      src={require(`static/portfolio/${imgEl}`)}
                      alt={imgEl}
                      className="d-block " //bookmark-simple-image-carousel"
                      key={() => uuidv4()}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          ref={nodeRef}
          variant="light"
          dismissible
          onClose={() => setShowMessage(false)}
          className="source bookmark"
        >
          <div className="col-sm-12 col-md-12 col-xl-6 top-15px buttom-15px hover-effect">
            <div>
              {/* <div className="bookmark-info"> */}
              {/* 커스터마이징 wrap */}
              <div className="custom-bookmark-wrap col-sm-11 col-md-11 ">
                <div className="custom-bookmark-content buttom-15px">
                  <div className="bookmark-text">
                    <div className="bookmark-title mw-200px">
                      <img className="icon" src={icon} alt={icon} />
                      {title}
                    </div>
                    <div className="bookmark-description ">{desrciption}</div>
                  </div>
                </div>

                <div className="custom-bookmark-content bookmark-text">
                  <span className="custom-bookmark-title mw-80px">
                    개발기간
                  </span>
                  <span className="bookmark-description col-sm-12 col-md-12  col-xl-12">
                    {startDate} - {endDate}
                  </span>
                </div>
                {!belong ? null : (
                  <div className="custom-bookmark-content bookmark-text">
                    <span className="custom-bookmark-title mw-80px">소속</span>
                    <span className="bookmark-description">{belong}</span>
                  </div>
                )}

                <div className="custom-bookmark-content bookmark-text">
                  <span className="custom-bookmark-title mw-80px">
                    담당역할
                  </span>
                  <span className="bookmark-description">{role}</span>
                </div>

                <div className="custom-bookmark-content ">
                  <span className="custom-bookmark-title mw-80px">
                    기술스택
                  </span>
                  <div className="tech-stack mw-120px">
                    {!tagObject
                      ? null
                      : tagObject.map((el, idx) => {
                          return (
                            <TagBlock
                              title={el.title}
                              color={el.color}
                              className="custom-bookmark-item"
                              key={() => uuidv4()}
                            />
                          );
                        })}
                  </div>
                </div>
                {!githubUrl
                  ? null
                  : githubUrl.map((el, idx) => {
                      return (
                        <div
                          className="custom-bookmark-content"
                          onClick={() => moveToLink(el)}
                          key={() => uuidv4()}
                        >
                          <span className="custom-bookmark-title mw-80px">
                            Github
                            {!githubUrl
                              ? null
                              : githubUrl.length > 1
                              ? idx + 1
                              : ""}
                          </span>
                          <a
                            className="bookmark-href mw-120px"
                            href={el}
                            target="_blank"
                            title={el}
                          >
                            {el}
                          </a>
                        </div>
                      );
                    })}
                {!serviceUrl ? null : (
                  <div
                    className="custom-bookmark-content"
                    onClick={() => moveToLink(serviceUrl)}
                  >
                    <label
                      className="custom-bookmark-title mw-80px"
                      htmlFor="service-url"
                    >
                      서비스 URL
                    </label>
                    <a
                      className="bookmark-href mw-120px"
                      id="service-url"
                      href={serviceUrl}
                      target="_blank"
                      title={serviceUrl}
                    >
                      {serviceUrl}
                    </a>
                  </div>
                )}

                <div className="custom-bookmark-content bookmark-text">
                  <label
                    className="custom-bookmark-title mw-80px"
                    htmlFor="detail-log"
                  >
                    상세 로그
                  </label>
                  {/* <span className="bookmark-description">{role}</span> */}
                  <div
                    className="notion-link-button"
                    id="detail-log"
                    onClick={() => moveToLink(sourceUrl)}
                  >
                    <img
                      className="notion-link-button-img"
                      src={require("static/img/notion.png")}
                      alt="노션링크"
                    />
                    <div className="bookmark-description blink-effect red-text">
                      <span className="bookmark-description red-text ">←</span>
                      &nbsp; click to see detail log
                    </div>
                  </div>
                </div>
              </div>

              {!imageSrc ? null : (
                <div className="image-wrap">
                  <Carousel
                    interval={2500}
                    nextIcon={null}
                    prevIcon={null}
                    indicators={false}
                    slide={false}
                    className="image-content"
                  >
                    {imageSrc.map((imgEl) => {
                      return (
                        <Carousel.Item>
                          <img
                            src={require(`static/portfolio/${imgEl}`)}
                            alt={imgEl}
                            className="col-sm-11 col-md-11  col-xl-11 image-max-height"
                            key={() => uuidv4()}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </Alert>
      </CSSTransition>
    </React.Fragment>
  );
}

export default BookmarkBlock;
