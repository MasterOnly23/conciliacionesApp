import { useState, useEffect } from "react";
import { SubHeader } from "../Header/SubHeader/SubHeader";
import { DragFileComponent } from "./DragFileComponent/DragFileComponent";
import { DownloadTemplate } from "./DownloadTemplate/DownloadTemplate";
import { useParams, Navigate } from "react-router-dom";
import { BankListComponent } from "./table/BankListComponent";
import { BankContext } from "./core/_context";

export const BankManagement = () => {
  const { Banco } = useParams();
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [BankName, setBankName] = useState("");
  const [periodo, setPeriodo] = useState("");

  const validBanks = [
    "BancoComafi",
    "BancoGalicia",
    "BancoICBC",
    "BancoSantander",
  ];

  const handleClickNewFile = () => {
    setFileUploaded(false);
    setFile(null);
  };

  useEffect(() => {
    if (!validBanks.includes(Banco)) {
      return <Navigate to="/404" />;
    }
    setFile(null);
    setFileUploaded(false);
  }, [Banco]);

  return (
    <>
      <BankContext.Provider
        value={{ BankName, setBankName, periodo, setPeriodo }}>
        <div className="bank-page">
          <SubHeader />
          <DownloadTemplate />
          {fileUploaded ? (
            <>
              <div className="d-flex justify-content-end me-5">
                <button
                  className="btn btn-secondary"
                  onClick={handleClickNewFile}>
                  Subir nuevo archivo
                </button>
              </div>
              <BankListComponent />
            </>
          ) : (
            <DragFileComponent
              bankName={Banco}
              file={file}
              setFile={setFile}
              setFileUploaded={setFileUploaded}
            />
          )}
        </div>
      </BankContext.Provider>
    </>
  );
};
