import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LanguagesTab from "./LanguagesTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Languages({ heading, hardLanguages, softLanguages }) {
  const languagesTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    languagesTabRef
  );
  return (
    <Jumbotron ref={languagesTabRef} fluid className="bg-white m-0" id="languages">
      <Container className="p-5 ">
        <h2 ref={languagesTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="languages-tabs"
          defaultActiveKey="hard-languages"
          id="languages-tabs"
        >
          <Tab
            tabClassName="languages-tab lead"
            eventKey="hard-languages"
            title="Languages"
          >
            <Row className="pt-3 px-1">
              <LanguagesTab languages={hardLanguages} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Languages;
