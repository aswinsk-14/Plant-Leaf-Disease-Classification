// ClassifyButton.js
import React from "react";
import "../styles/ClassifyButton.css";

const ClassifyButton = ({ onClassify }) => {
  return (
    
    <button onClick={onClassify} >
      Classify Image
    </button>
  );
};

export default ClassifyButton;
