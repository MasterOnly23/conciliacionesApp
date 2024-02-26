import {  useEffect, useState, useContext } from "react";
import { FileInput } from "./FileInput/FileInput";
import { ToastMessage } from "../../ToastMessage/ToastMessage";
import "./DragFileComponent.css";
import PropTypes from "prop-types";
import { uploadFile } from "../core/_requests";
import { BankContext } from "../core/_context";

export const DragFileComponent = ({ file, setFile, setFileUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(null);
  const [resUpload, setResUpload] = useState("");
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const { BankName, setBankName, periodo, setPeriodo } = useContext(BankContext);
  

  // const [isDragging2, setIsDragging2] = useState(false);
  // const [isClicked2, setIsClicked2] = useState(false);
  // const [file2, setFile2] = useState(null);

  const handleFileLoad = async (file) => {
    try {
      setIsLoading(true);
      setFile(file);
      const response = await uploadFile(file);
      setShowToast(true);
      setMessage("Archivo cargado correctamente.");
      console.log(response.data.bank_name, response.data.periodo);
      setBankName(response.data.bank_name);
      setPeriodo(response.data.periodo);
      if (response.status === 200) {
        setUploadSuccessful(true);
      }
    } catch (err) {
      console.log(err);
      setMessage("Ocurrió un error durante la carga del archivo.");
      setResUpload("error");
      setFileUploaded(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    let file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) {
      handleFileLoad(file);
    }
  };

  const handleFileChange = (e) => {
    let file = e.target.files && e.target.files[0];
    if (file) {
      handleFileLoad(file);
      e.target.value = null;
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (uploadSuccessful) {
      setIsLoading(true);
      setTimeout(() => {
        setFileUploaded(true);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadSuccessful]);

  return (
    <>
      <div className="fileInput-container position-relative">
        <div className="position-absolute top-0 start-40  zindex-1 ms-5">
        {showToast && (
          <ToastMessage
            resUpload={resUpload}
            setShowToast={setShowToast}
            showToast={showToast}
            messageResponse={message}
          />
        )}
        </div>
        <div className="labelInput-container">
          <span>Archivo a Conciliar</span>
          <FileInput
            isDragging={isDragging}
            isClicked={isClicked}
            file={file}
            isLoading={isLoading}
            handleFileChange={(e) => handleFileChange(e)}
            handleDragOver={(e) => handleDragOver(e)}
            handleDragLeave={(e) => handleDragLeave(e)}
            handleDrop={(e) => handleDrop(e)}
            handleClick={() => handleClick()}
          />
        </div>
        {/* <div className="labelInput-container">
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
        </div> */}
      </div>
    </>
  );
};

DragFileComponent.propTypes = {
  bankName: PropTypes.string.isRequired,
  file: PropTypes.object,
  setFile: PropTypes.func.isRequired,
  setFileUploaded: PropTypes.func.isRequired,
};
