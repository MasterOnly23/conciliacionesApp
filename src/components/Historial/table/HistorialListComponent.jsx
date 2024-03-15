import "react-datepicker/dist/react-datepicker.css";
import "./styles/HistorialListComponent.css";
import "../filters/FilterHistorialComponent.css";
import { format, subYears } from "date-fns";
import { FilterHistorialComponent } from "../filters/FilterHistorialComponent";
import { useState, useEffect } from "react";
import { getHistorial } from "../core/_requests.js";
// import { BankContext } from "../../BankManagement/core/_context";
import { HistorialTableComponent } from "./HistorialTableComponent";
import { useExtractoColumns, useMayorColumns } from "./columns/useColumns";
import { Loadder } from "../../Loadder/Loadder";
import { FilterNoResultComponent } from "../filters/FilterNoResultComponent.jsx";
// import Spinner from "react-bootstrap/Spinner";

export const HistorialListComponent = () => {
  const [data, setData] = useState([]);
  const [bankName, setBankName] = useState("");
  const [monto, setMonto] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checkYearAgo , setCheckYearAgo] = useState(true)
  // const { BankName, setBankName, periodo, setPeriodo } =
  //   useContext(BankContext);
  const extractoColumns = useExtractoColumns();
  const mayorColumns = useMayorColumns();
  // const filteredExtracto = data.filter((item) => item.extracto !== null);
  // const filteredMayor = data.filter((item) => item.mayor !== null);

  useEffect(() => {
    const fetchHistorial = async () => {
      try {
        setIsLoading(true);
        const result = await getHistorial("", "", "historial");

        if (result.data) {
          
          const processedData = result.data
            .map((item) => {
              const fileHeader = JSON.parse(item.file_header)[0].fields;
              const noConciliados = JSON.parse(item.no_conciliados).map(
                (noConciliado) => noConciliado.fields
              );

              return { fileHeader, noConciliados };
            })

          setData(processedData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }

    };
    fetchHistorial();
  }, []);


  return (
    <>
      <div className="d-flex justify-content-center mt-2">
      <h2 className="mb-0">HISTORIAL</h2>
      </div>
      <FilterHistorialComponent
        bankName={bankName}
        setBankName={setBankName}
        monto={monto}
        setMonto={setMonto}
        setPeriodo={setPeriodo}
        periodo={periodo}
        // onSearch={handleSearch}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        checkYearAgo={checkYearAgo}
        setCheckYearAgo={setCheckYearAgo}
      />
      <div className="historial-container mt-3">
        {isLoading ? (
          <Loadder position={"absolute"} />
        ) : (
          (() => {
            const filteredData = data.filter((item) => {
              const oneYearAgo = format(subYears(new Date(), 1), "yyyy/MM");
              //filtro inicial
              if (checkYearAgo && item.fileHeader.periodo < oneYearAgo) {
                return false;
              }
              

              // Filtrar por bankName
              if (
                bankName.toUpperCase() &&
                item.fileHeader.bank_name !== bankName.toUpperCase()
              ) {
                return false;
              }

              // Filtrar por periodo
              if (
                periodo &&
                item.fileHeader.periodo !== format(periodo, "yyyy/MM")
              ) {
                return false;
              }

              // Filtrar por monto
              if (
                monto &&
                !item.noConciliados.some(
                  (noConciliado) =>
                    Math.abs(noConciliado.extracto_monto) === Number(monto) ||
                    Math.abs(noConciliado.mayor_monto) === Number(monto)
                )
              ) {
                return false;
              }

              return true;
            });

            if (filteredData.length === 0) {
              return <FilterNoResultComponent />; // Este es tu componente que se renderiza cuando no hay resultados
            }

            return filteredData.map((item, index) => {
              const filteredExtracto = item.noConciliados.filter(
                (noConciliado) => noConciliado.extracto_fecha !== null
              );
              const filteredMayor = item.noConciliados.filter(
                (noConciliado) => noConciliado.mayor_fecha !== null
              );

              return (
                <div
                  key={index}
                  className="border rounded mt-1 mb-3 ms-1 container-fileHeader">
                  <h3 className="text-center mb-0 pt-2">
                    {item.fileHeader.bank_name} - {item.fileHeader.periodo}{" "}
                  </h3>

                  <div className="d-flex ">
                    <div
                      className={`table-container ${
                        !isLoading ? "visible" : ""
                      }`}>
                      <HistorialTableComponent
                        columns={extractoColumns}
                        data={filteredExtracto}
                        title={`Extracto - ${item.fileHeader.bank_name}`}
                      />
                    </div>
                    <div
                      className={`table-container ${
                        !isLoading ? "visible" : ""
                      }`}>
                      <HistorialTableComponent
                        columns={mayorColumns}
                        data={filteredMayor}
                        title={`Mayor - ${item.fileHeader.bank_name}`}
                      />
                    </div>
                  </div>
                </div>
              );
            });
          })()
        )}

      </div>
    </>
  );
};
