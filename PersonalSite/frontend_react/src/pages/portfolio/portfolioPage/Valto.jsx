import React from "react";
import valtoNotion from "pages/portfolio/portfolioPage/htmlSource/valto";

function Valto(props) {
  const htmlCode = valtoNotion();

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>;
}

export default Valto;
