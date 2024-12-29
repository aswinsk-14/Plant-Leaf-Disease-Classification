import React from "react";
import "../styles/ImageCard.css";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image} alt="Uploaded Preview" className="image-preview" />
    </div>
  );
}

export default ImageCard;
