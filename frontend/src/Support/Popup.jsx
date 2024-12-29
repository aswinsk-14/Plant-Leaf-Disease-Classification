import React from "react";
import "../styles/Popup.css";

const Popup = ({ image, response, onClose }) => {
  if (!image || !response) return null; // Render nothing if no image or response

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h3>Classification Result</h3>
        <div className="popup-image-container">
          <img src={image} alt="Uploaded preview" className="popup-image" />
        </div>
        <div className="popup-response">
          <p><strong>Class:</strong> {response.class}</p>
          <p><strong>Confidence:</strong> {(response.confidence * 100).toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
