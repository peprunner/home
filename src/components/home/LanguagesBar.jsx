import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function LanguagesBar({ language, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{language}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

export default LanguagesBar;
