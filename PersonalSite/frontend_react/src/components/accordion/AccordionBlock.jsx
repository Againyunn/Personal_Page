import React from "react";
import ItemAccordion from "components/itemAccordian/ItemAccordion";

// css
import { Accordion } from "react-bootstrap";

function AccordionBlock(props) {
  return (
    <Accordion>
      <ItemAccordion className="description" title={"i"} />
    </Accordion>
  );
}

export default AccordionBlock;
