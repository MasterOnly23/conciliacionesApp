// import Table from 'react-bootstrap/Table';
import "./BankListComponent.css";
import { useEffect, useState, useContext } from "react";
import { getNoConciliados, exportExcel } from "../core/_requests";
import { BankContext } from "../core/_context";
import { BankTableComponent } from "./BankTableComponent";
import { useExtractoColumns, useMayorColumns } from "./columns/useColumns";
import Button from "react-bootstrap/Button";

export const BankListComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [headerId, setHeaderId] = useState(null);
  const { BankName, setBankName, periodo, setPeriodo } =
    useContext(BankContext);
  const extractoColumns = useExtractoColumns();
  const mayorColumns = useMayorColumns();
  const filteredExtracto = data.filter((item) => item.extracto !== null);
  const filteredMayor = data.filter((item) => item.mayor !== null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await getNoConciliados(BankName, periodo, "diferencias");
        setData(result.data.no_conciliados);
        setHeaderId(result.data.file_header_id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [BankName, periodo]);

  const downloadFile = async (headerId) => {
    try {
      const response = await exportExcel('export', headerId);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `Conciliacion-${BankName}-${periodo}.xlsx`;
      document.body.appendChild(a); // Necesitamos agregar el enlace al documento para que funcione en Firefox
      a.click();
      a.remove(); // Luego podemos eliminar el enlace
    } catch (error) {
      console.error('Hubo un error al descargar el archivo:', error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-start ms-5 mt-3">
            <Button
              className="btn btn-success p-1"
              onClick={() => downloadFile(headerId)}>
              Descargar Excel
            </Button>
          </div>
          <div className="d-flex table-container-group">
            <div className="table-container">
              <BankTableComponent
                columns={extractoColumns}
                data={filteredExtracto}
                title={"Extracto"}
              />
            </div>
            <div className="table-container">
              <BankTableComponent
                columns={mayorColumns}
                data={filteredMayor}
                title={"Mayor"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
