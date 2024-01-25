import { useState } from "react";
import { SubHeader } from "../Header/SubHeader/SubHeader";
import { FileInput } from "./FileInput/FileInput";
import "./DragFileComponent.css";

export const DragFileComponent = () => {
  const [isDragging1, setIsDragging1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [file1, setFile1] = useState(null);

  const [isDragging2, setIsDragging2] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [file2, setFile2] = useState(null);

  const handleDragOver = (e, setIsDragging) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (setIsDragging) => {
    setIsDragging(false);
  };

  const handleDrop = (e, setIsDragging, setFile) => {
    e.preventDefault();
    setIsDragging(false);
    let files = [...e.dataTransfer.files];
    setFile(files[0]);
  };

  const handleFileChange = (e, setFile) => {
    let files = [...e.target.files];
    setFile(files[0]);
  };

  const handleClick = (isClicked, setIsClicked) => {
    setIsClicked(!isClicked);
  };
  
  return (
    <>
      <SubHeader />
      <div className="fileInput-container">
        <div className="labelInput-container">
          <span>Archivo 1</span>
          <FileInput
            isDragging={isDragging1}
            isClicked={isClicked1}
            file={file1}
            handleFileChange={(e) => handleFileChange(e, setFile1)}
            handleDragOver={(e) => handleDragOver(e, setIsDragging1)}
            handleDragLeave={() => handleDragLeave(setIsDragging1)}
            handleDrop={(e) => handleDrop(e, setIsDragging1, setFile1)}
            handleClick={() => handleClick(setIsClicked1)}
          />
        </div>
        <div className="labelInput-container">
          <span>Archivo 2</span>
          <FileInput
            isDragging={isDragging2}
            isClicked={isClicked2}
            file={file2}
            handleFileChange={(e) => handleFileChange(e, setFile2)}
            handleDragOver={(e) => handleDragOver(e, setIsDragging2)}
            handleDragLeave={() => handleDragLeave(setIsDragging2)}
            handleDrop={(e) => handleDrop(e, setIsDragging2, setFile2)}
            handleClick={() => handleClick(setIsClicked2)}
          />
        </div>
      </div>
    </>
  );
};