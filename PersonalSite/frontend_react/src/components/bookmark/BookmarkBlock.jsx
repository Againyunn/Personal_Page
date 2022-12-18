import React from "react";

// component
import TagBlock from "components/tag/TagBlock";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/NotionStyle.css";
import "static/style/css/Bookmark.css";
import "static/style/css/Common.css";

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
  title,
  desrciption,
  role,
  startDate,
  endDate,
  imageSrc,
  tagObject,
}) {
  console.log("tagObject: ", tagObject);
  return (
    <div className="indented">
      <figure>
        <a href={sourceUrl} className="bookmark source">
          <div className="bookmark-info">
            {/* 커스터마이징 wrap */}
            <div className="custom-bookmark-wrap">
              <div className="custom-bookmark-content">
                <div className="bookmark-text">
                  <div className="bookmark-title">{title}</div>
                  <div className="bookmark-description">{desrciption}</div>
                </div>
              </div>

              <div className="custom-bookmark-content">
                <span className="custom-bookmark-title mw-100px">개발기간</span>
                <span className="bookmark-description">
                  {startDate} - {endDate}
                </span>
              </div>

              <div className="custom-bookmark-content">
                <span className="custom-bookmark-title mw-100px">담당역할</span>
                <span className="bookmark-description">{role}</span>
              </div>

              <div className="custom-bookmark-content">
                <span className="custom-bookmark-title mw-100px">기술스택</span>
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

              <div className="bookmark-href">{sourceUrl}</div>
            </div>
          </div>
          {!imageSrc ? null : <img src={imageSrc} className="bookmark-image" />}
        </a>
      </figure>
    </div>
  );
}

export default BookmarkBlock;
