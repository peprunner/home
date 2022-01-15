import React from "react";
import Col from "react-bootstrap/Col";
import LanguagesBar from "./LanguagesBar";

function LanguagesSection({ languages, isScrolled }) {
  return (
    <>
      {languages.map((language, index) => (
        <LanguagesBar
          key={`${language}-${index}`}
          language={language.name}
          value={language.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function LanguagesTab({ languages, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <LanguagesSection
          languages={languages.slice(0, Math.floor(languages.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <LanguagesSection
          languages={languages.slice(Math.floor(languages.length / 2), languages.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default LanguagesTab;
