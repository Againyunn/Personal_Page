import React from "react";

import example from "static/img/gmail.png";

import ItemAccordion from "components/itemAccordian/ItemAccordion";

// css
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import AccordionBlock from "components/accordion/AccordionBlock";

function ItemAccordionContainer(props) {
  const [itemData, setItemData] = useState(
    !props.dataContent ? false : props.data
  );

  useEffect(() => {
    setItemData(props.dataContent);

    console.log(props.dataContent["title-content"].img);
  }, [props.dataContent]);

  return (
    <React.Fragment>
      {!itemData ? null : (
        <div className="item-accordian-wrap">
          <div className="item-accordian-title">
            <span className="title-text">
              {itemData["title-content"].title}
            </span>
            <span className="period">
              {itemData["title-content"].period.start} ~&nbsp;
              {itemData["title-content"].period.end}
            </span>
          </div>
          <img
            className="title-img"
            // src={require("static/img/gmail.png")}
            // src={require(itemData["title-content"].img)}
            src={require(`static/img/${itemData["title-content"].img}.png`)}
            alt=""
          />
          <AccordionBlock />
          {/* <Accordion>
            <ItemAccordion className="description" title={"i"} />
          </Accordion> */}
        </div>
      )}
    </React.Fragment>
  );
}

export default ItemAccordionContainer;
