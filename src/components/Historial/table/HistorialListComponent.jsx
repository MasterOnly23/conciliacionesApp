// import Table from 'react-bootstrap/Table';
import "./BankListComponent.css";
import { useEffect, useState, useContext } from "react";
import { getHistorial } from "../core/_requests";
import { BankContext } from "../core/_context";
import { HistorialTableComponent } from "./HistorialTableComponent";
import { useExtractoColumns, useMayorColumns } from "./columns/useColumns";

export const HistorialListComponent = () => {
  const [data, setData] = useState([]);
  const { BankName, setBankName, periodo, setPeriodo } =
    useContext(BankContext);
  const extractoColumns = useExtractoColumns();
  const mayorColumns = useMayorColumns();
  const filteredExtracto = data.filter(item => item.extracto !== null);
  const filteredMayor = data.filter(item => item.mayor !== null);
    console.log('BankListComponent rendered');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHistorial(BankName, periodo, 'diferencias');
      if(result.data){
        print(result.data);
        setData(result.data);
      }
    };

    fetchData();
  }, [BankName, periodo]);

  return (
    <div className="d-flex">
    <div className="table-container">
      <HistorialTableComponent columns={extractoColumns} data={filteredExtracto} title={'Extracto'} />
      </div>
      <div className="table-container">
      <HistorialTableComponent columns={mayorColumns} data={filteredMayor} title={'Mayor'} />
      </div>
    </div>
  );
};
