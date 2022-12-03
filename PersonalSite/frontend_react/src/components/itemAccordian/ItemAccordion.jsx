import React, { useState } from "react";

// css
import "static/style/css/ItemAccordion.css";
import { Accordion } from "react-bootstrap";

function ItemAccordion(props) {
  // 좌, 우 편향 설정
  const [fixedDirection, setFixedDirection] = useState(false);

  return (
    <Accordion.Item className="accordian-item " eventKey="0">
      <Accordion.Header>
        <span className="title">{props.title}</span>
      </Accordion.Header>
      <Accordion.Body>body</Accordion.Body>
      {/* <div className={`${fixedDirection}`}>Img</div> */}
    </Accordion.Item>
  );
}

export default ItemAccordion;
