import React from "react";

// component
import TagBlock from "components/tag/TagBlock";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/ProjectBlock.css";
import "static/style/css/Common.css";

// bootstrap
import { Carousel } from "react-bootstrap";

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

function ProjectBlock({
  rightLeft,
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
}) {
  const moveToLink = (targetUrl) => {
    window.open(targetUrl);
  };

  return (
    <div className="col-sm-12 col-md-12 col-xl-6 top-15px buttom-15px hover-effect">
      <a href={sourceUrl} target="_blank" className="source bookmark ">
        {/* <div className="bookmark-info"> */}
        {/* 커스터마이징 wrap */}
        <div className="custom-bookmark-wrap col-sm-11 col-md-11 ">
          <div className="custom-bookmark-content buttom-15px">
            <div className="bookmark-text">
              <div className="bookmark-title mw-200px">
                <img className="icon" src={icon} alt={icon} />
                {title}
              </div>
              <div className="bookmark-description col-sm-12 col-md-11  col-xl-12 ">
                {desrciption}
              </div>
            </div>
          </div>

          <div className="custom-bookmark-content bookmark-text">
            <span className="custom-bookmark-title mw-80px">개발기간</span>
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
            <span className="custom-bookmark-title mw-80px">담당역할</span>
            <span className="bookmark-description">{role}</span>
          </div>

          <div className="custom-bookmark-content ">
            <span className="custom-bookmark-title mw-80px">기술스택</span>
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
                      {!githubUrl ? null : githubUrl.length > 1 ? idx + 1 : ""}
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
              <span className="custom-bookmark-title mw-80px">서비스 URL</span>
              <a
                className="bookmark-href mw-120px"
                href={serviceUrl}
                target="_blank"
                title={serviceUrl}
              >
                {serviceUrl}
              </a>
            </div>
          )}
        </div>
        {!imageSrc ? null : (
          <div className="image-wrap ">
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
                      className="col-sm-12 col-md-12  col-xl-12 image-max-height"
                      key={() => uuidv4()}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )}
        {/* </div> */}
      </a>
    </div>
  );
}

export default ProjectBlock;
