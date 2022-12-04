import React from "react";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// components
import ItemAccordionContainer from "components/itemAccordian/ItemAccordionContainer";

// data
import { portfolioData } from "pages/portfolio/portfolioData/portfolioData";

function Portfolio(props) {
  console.log("portfolioData: ", portfolioData);
  return (
    <React.Fragment>
      {!portfolioData
        ? null
        : portfolioData.map((el, idx) => {
            return (
              <div>
                <ItemAccordionContainer key={() => uuidv4()} dataContent={el} />
                {idx !== portfolioData.length - 1 ? <hr /> : null}
              </div>
            );
          })}
    </React.Fragment>
  );
}

export default Portfolio;
