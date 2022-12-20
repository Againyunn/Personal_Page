import React from "react";

// component
import TagBlock from "components/tag/TagBlock";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/NotionStyle.css";
import "static/style/css/Bookmark.css";
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

function BookmarkBlock({
  sourceUrl,
  githubUrl,
  serviceUrl,
  icon,
  title,
  desrciption,
  role,
  startDate,
  endDate,
  imageSrc,
  tagObject,
}) {
  // console.log("imageSrc: ", imageSrc);
  // const image = new Image();

  // image.src = imageSrc;

  // let imgSrc = "../../static/img/gmail.png"; //imageSrc.toString();

  return (
    // <React.Fragment>

    <div className="col-sm-12 col-md-12  col-xl-6  top-15px buttom-15px">
      <a href={sourceUrl} target="_blank" className="bookmark source ">
        <div className="bookmark-info">
          {/* 커스터마이징 wrap */}
          <div className="custom-bookmark-wrap col-sm-11 col-md-11  col-xl-5">
            <div className="custom-bookmark-content buttom-15px">
              <div className="bookmark-text">
                <div className="bookmark-title mw-200px">
                  <img className="icon" src={icon} alt={icon} />
                  {title}
                </div>
                <div className="bookmark-description">{desrciption}</div>
              </div>
            </div>

            <div className="custom-bookmark-content bookmark-text">
              <span className="custom-bookmark-title mw-80px">개발기간</span>
              <span className="bookmark-description">
                {startDate} - {endDate}
              </span>
            </div>

            <div className="custom-bookmark-content bookmark-text">
              <span className="custom-bookmark-title mw-80px">담당역할</span>
              <span className="bookmark-description">{role}</span>
            </div>

            <div className="custom-bookmark-content ">
              <span className="custom-bookmark-title mw-80px">기술스택</span>
              <div className="tech-stack">
                {!tagObject
                  ? null
                  : tagObject.map((el, idx) => {
                      return (
                        <TagBlock
                          title={el.title}
                          color={el.color}
                          className="custom-bookmark-item"
                        />
                      );
                    })}
              </div>
            </div>

            <div className="custom-bookmark-content ">
              <span className="custom-bookmark-title mw-80px">Github</span>
              <a
                className="bookmark-href"
                href={githubUrl}
                target="_blank"
                title={githubUrl}
              >
                {githubUrl}
              </a>
            </div>

            {!serviceUrl ? null : (
              <div className="custom-bookmark-content ">
                <span className="custom-bookmark-title mw-80px">
                  서비스 URL
                </span>
                <a
                  className="bookmark-href"
                  href={serviceUrl}
                  target="_blank"
                  title={serviceUrl}
                >
                  {serviceUrl}
                </a>
              </div>
            )}
          </div>
        </div>
        {!imageSrc ? null : (
          <div className="image-wrap p-15px">
            <Carousel
              interval={3000}
              nextIcon={null}
              prevIcon={null}
              indicators={false}
              slide={false}
            >
              {imageSrc.map((imgEl) => {
                return (
                  <Carousel.Item>
                    <img
                      src={require(`../../static/img/${imgEl}`)}
                      alt={imgEl}
                      className="d-block"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )}
      </a>
    </div>

    // </React.Fragment>
  );
}

export default BookmarkBlock;
