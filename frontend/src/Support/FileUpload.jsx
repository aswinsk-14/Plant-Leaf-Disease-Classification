import React, { useState } from "react";

const FileUpload = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onImageUpload(imageUrl, file); // Pass file object to parent
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: "100px", marginTop: "10px" }} />}
    </div>
  );
};

export default FileUpload;
