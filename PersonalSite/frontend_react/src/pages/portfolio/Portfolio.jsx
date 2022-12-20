import React, { useEffect, useState } from "react";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// components
import ItemAccordionContainer from "components/itemAccordian/ItemAccordionContainer";
import LoadingSpinner from "components/loadSpinner/LoadSpinner";

// data
import { portfolioData } from "pages/portfolio/portfolioData/portfolioData";
import TagBlock from "components/tag/TagBlock";
import BookmarkBlock from "components/bookmark/BookmarkBlock";

// css
import "static/style/css/Common.css";

function Portfolio(props) {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // spinner test
  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 400);
  }, []);

  return (
    <React.Fragment>
      {!isDataLoaded ? (
        <LoadingSpinner text={"Loading..."} />
      ) : !portfolioData ? null : (
        <div className="container">
          <div className="row">
            {portfolioData.map((el, idx) => {
              return (
                <BookmarkBlock
                  key={() => uuidv4()}
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
                />
                // { idx !== portfolioData.length - 1 ? <hr /> : null }
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Portfolio;
