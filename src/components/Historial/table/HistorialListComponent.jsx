import "react-datepicker/dist/react-datepicker.css";
import "./styles/HistorialListComponent.css";
import "../filters/FilterHistorialComponent.css";
import { format } from "date-fns";
import { FilterHistorialComponent } from "../filters/FilterHistorialComponent";
import { useState, useEffect } from "react";
import { getHistorial } from "../core/_requests.js";
// import { BankContext } from "../../BankManagement/core/_context";
import { HistorialTableComponent } from "./HistorialTableComponent";
import { useExtractoColumns, useMayorColumns } from "./columns/useColumns";
import { Loadder } from "../../Loadder/Loadder";
import { FilterNoResultComponent } from "../filters/FilterNoResultComponent.jsx";
import { set } from "date-fns";
// import Spinner from "react-bootstrap/Spinner";

export const HistorialListComponent = () => {
  const [data, setData] = useState([]);
  const [bankName, setBankName] = useState("");
  const [monto, setMonto] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
          const processedData = result.data.map((item) => {
            const fileHeader = JSON.parse(item.file_header)[0].fields;
            const noConciliados = JSON.parse(item.no_conciliados).map(
              (noConciliado) => noConciliado.fields
            );

            return { fileHeader, noConciliados };
          });
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

  // const filteredExtracto = data.flatMap((item) =>
  //   item.noConciliados.filter(
  //     (noConciliado) => noConciliado.extracto_fecha !== null
  //   )
  // );
  // const filteredMayor = data.flatMap((item) =>
  //   item.noConciliados.filter(
  //     (noConciliado) => noConciliado.mayor_fecha !== null
  //   )
  // );

  // data.forEach(item => {
  //   const fileHeader = JSON.parse(item.file_header)[0].fields;
  //   const noConciliados = JSON.parse(item.no_conciliados).map(noConciliado => noConciliado.fields);

  //   console.log('fileHeader:', fileHeader);
  //   console.log('noConciliados:', noConciliados);

  //   noConciliados.forEach(noConciliado => {
  //     console.log('noConciliado:', noConciliado.extracto_fecha);
  //   });
  // });

  // const handleSearch = async () => {
  //   setIsLoading(true);
  //   const formattedPeriodo = periodo ? format(periodo, "yyyy/MM") : null;
  //   console.log(formattedPeriodo);
  //   // setTimeout(() => {
  //   const queryParams = new URLSearchParams();
  //   if (bankName) queryParams.append("bankName", bankName);
  //   if (monto) queryParams.append("monto", monto);
  //   if (formattedPeriodo) queryParams.append("periodo", formattedPeriodo);
  //   const result = await getHistorial(bankName, formattedPeriodo, "historial");
  //   if (result.data) {
  //     const processedData = result.data.map((item) => {
  //       const fileHeader = JSON.parse(item.file_header)[0].fields;
  //       const noConciliados = JSON.parse(item.no_conciliados).map(
  //         (noConciliado) => noConciliado.fields
  //       );

  //       return { fileHeader, noConciliados };
  //     });
  //     setData(processedData);
  //   }
  //   // Simula la finalización de la carga después de 3 segundos
  //   setIsLoading(false);
  //   // }, 3000);
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getHistorial(BankName, periodo, 'diferencias');
  //     if(result.data){
  //       print(result.data);
  //       setData(result.data);
  //     }
  //   };

  //   fetchData();
  // }, [BankName, periodo]);
  // const data = [
  //   {
  //     file_header:
  //       '[{"model": "conciliaciones.fileheaders", "pk": 57, "fields": {"name": "FILES PARA CONCILIAR NOV 23 COMAFI.xlsx", "bank_name": "COMAFI", "periodo": "2024/01", "date_created": "2024-03-01", "is_deleted": false}}]',
  //     no_conciliados:
  //       '[{"model": "conciliaciones.noconciliado", "pk": 13012, "fields": {"file_header": 57, "extracto_fecha": "2023-11-01", "extracto_descripcion": "Transf Inmed. Cuentas Propias eBanking", "extracto_monto": "-1500000.00", "mayor_fecha": null, "mayor_descripcion": "", "mayor_monto": null}}, {"model": "conciliaciones.noconciliado", "pk": 13013, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-1200000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13014, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-300000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13015, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-03", "mayor_descripcion": "03/11/2023 OP 00079738 Rinde Estanis TC Visa Comaf", "mayor_monto": "-194428.06"}}, {"model": "conciliaciones.noconciliado", "pk": 13016, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-06", "mayor_descripcion": "S/OP 00079530 BANCO COMAFI S.A.", "mayor_monto": "-120976.43"}}]',
  //   },
  //   {
  //     file_header:
  //       '[{"model": "conciliaciones.fileheaders", "pk": 58, "fields": {"name": "FILES PARA CONCILIAR NOV 23 COMAFI.xlsx", "bank_name": "COMAFI", "periodo": "2024/02", "date_created": "2024-03-01", "is_deleted": false}}]',
  //     no_conciliados:
  //       '[{"model": "conciliaciones.noconciliado", "pk": 13013, "fields": {"file_header": 58, "extracto_fecha": "2023-11-01", "extracto_descripcion": "Transf Inmed. Cuentas Propias eBanking", "extracto_monto": "-1500001.00", "mayor_fecha": null, "mayor_descripcion": "", "mayor_monto": null}}, {"model": "conciliaciones.noconciliado", "pk": 13013, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-1200000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13014, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-300000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13015, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-03", "mayor_descripcion": "03/11/2023 OP 00079738 Rinde Estanis TC Visa Comaf", "mayor_monto": "-194428.06"}}, {"model": "conciliaciones.noconciliado", "pk": 13016, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-06", "mayor_descripcion": "S/OP 00079530 BANCO COMAFI S.A.", "mayor_monto": "-120976.43"}}]',
  //   },
  //   {
  //     file_header:
  //       '[{"model": "conciliaciones.fileheaders", "pk": 59, "fields": {"name": "FILES PARA CONCILIAR NOV 23 COMAFI.xlsx", "bank_name": "COMAFI", "periodo": "2024/03", "date_created": "2024-03-01", "is_deleted": false}}]',
  //     no_conciliados:
  //       '[{"model": "conciliaciones.noconciliado", "pk": 13014, "fields": {"file_header": 59, "extracto_fecha": "2023-11-01", "extracto_descripcion": "Transf Inmed. Cuentas Propias eBanking", "extracto_monto": "-1500002.00", "mayor_fecha": null, "mayor_descripcion": "", "mayor_monto": null}}, {"model": "conciliaciones.noconciliado", "pk": 13013, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-1200000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13014, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-01", "mayor_descripcion": "Transf Comafi a Galicia", "mayor_monto": "-300000.00"}}, {"model": "conciliaciones.noconciliado", "pk": 13015, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-03", "mayor_descripcion": "03/11/2023 OP 00079738 Rinde Estanis TC Visa Comaf", "mayor_monto": "-194428.06"}}, {"model": "conciliaciones.noconciliado", "pk": 13016, "fields": {"file_header": 57, "extracto_fecha": null, "extracto_descripcion": "", "extracto_monto": null, "mayor_fecha": "2023-11-06", "mayor_descripcion": "S/OP 00079530 BANCO COMAFI S.A.", "mayor_monto": "-120976.43"}}]',
  //   },
  // ];
  // const processedData = data.map(item => {
  //   const fileHeader = JSON.parse(item.file_header)[0].fields;
  //   const noConciliados = JSON.parse(item.no_conciliados).map(noConciliado => noConciliado.fields);

  //   return { fileHeader, noConciliados };
  // });
  // const filteredExtracto = processedData.filter((item) => item.extracto !== null);
  // const filteredMayor = processedData.filter((item) => item.mayor !== null);
  // console.log('filteredExtracto:', filteredExtracto);
  // console.log('filteredMayor:', filteredMayor);

  return (
    <>
      <FilterHistorialComponent
        setBankName={setBankName}
        setMonto={setMonto}
        setPeriodo={setPeriodo}
        periodo={periodo}
        // onSearch={handleSearch}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <div className="historial-container mt-3">
        {isLoading ? (
          <Loadder position={"absolute"} />
        ) : (
          (() => {
            const filteredData = data.filter((item) => {
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
