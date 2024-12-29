import React, { useState } from "react";
import "../styles/PepperClassification.css";
import FileUpload from "../Support/FileUpload";
import ClassifyButton from "../Support/ClassifyButton";
import Popup from "../Support/Popup";

function PepperClassification() {
  const [uploadedImage, setUploadedImage] = useState(null); // For preview
   const [file, setFile] = useState(null); // For the actual file to send to the backend
   const [classificationResponse, setClassificationResponse] = useState(null); // For backend response
   const [isPopupOpen, setIsPopupOpen] = useState(false); // Control popup visibility
 
   const handleImageUpload = (imageUrl, uploadedFile) => {
     setUploadedImage(imageUrl); // Set the preview URL
     setFile(uploadedFile); // Set the actual file
   };
 
   const handleClassifyImage = async () => {
     if (!file) {
       console.error("No file uploaded to classify");
       return;
     }
 
     const formData = new FormData();
     formData.append("file", file); // Attach the file to the form data
 
     try {
       const response = await fetch("http://localhost:8000/predict/pepper", {
         method: "POST",
         body: formData,
       });
 
       if (!response.ok) {
         console.error("Failed to classify image:", response.statusText);
         return;
       }
 
       const result = await response.json();
       setClassificationResponse(result); // Set the response to state
       setIsPopupOpen(true); // Open the popup
     } catch (error) {
       console.error("Error classifying image:", error);
     }
   };
 
   const handleClosePopup = () => {
     setIsPopupOpen(false);
   };
  return (
    <div className="pepper">
      <h2 className="classification-title">Pepper Disease</h2>
      <p className="classification-description">
        We help you to identify bell pepper diseases in your pepper leaves
      </p>
      <ul>
        <li className="classification-item">Upload only pepper Leaf Image</li>
        <li className="classification-item">
          Place your leaf in well lit area
        </li>
        <li className="classification-item">
          Avoid other objects in the image
        </li>
      </ul>

      <FileUpload
          onImageUpload={(imageUrl, file) => handleImageUpload(imageUrl, file)}
        />

        {uploadedImage && <ClassifyButton onClassify={handleClassifyImage} />}

        {isPopupOpen && (
          <Popup
            image={uploadedImage}
            response={classificationResponse}
            onClose={handleClosePopup}
          />
        )}
    </div>
  );
}

export default PepperClassification;
