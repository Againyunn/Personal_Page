import React from "react";

import example from "static/img/gmail.png";

import ItemAccordion from "components/itemAccordian/ItemAccordion";

// css
import { Accordion } from "react-bootstrap";

function ItemAccordionContainer(props) {
  let test = `
    국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.

국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다. 교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 대통령의 임기는 5년으로 하며, 중임할 수 없다.
    `;

  return (
    <div className="item-accordian-wrap">
      <img className="title-img" src={example} alt="" />
      <Accordion>
        <ItemAccordion className="description" title={test} />
      </Accordion>
    </div>
  );
}

export default ItemAccordionContainer;
