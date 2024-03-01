// import Table from 'react-bootstrap/Table';
import "./BankListComponent.css";
import { useEffect, useState, useContext } from "react";
import { getNoConciliados } from "../core/_requests";
import { BankContext } from "../core/_context";
import { BankTableComponent } from "./BankTableComponent";
import { useExtractoColumns, useMayorColumns } from "./columns/useColumns";

export const BankListComponent = () => {
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
      const result = await getNoConciliados(BankName, periodo, 'diferencias');
      setData(result.data.no_conciliados);
    };

    fetchData();
  }, [BankName, periodo]);

  return (
    <div className="d-flex">
    <div className="table-container">
      <BankTableComponent columns={extractoColumns} data={filteredExtracto} title={'Extracto'} />
      </div>
      <div className="table-container">
      <BankTableComponent columns={mayorColumns} data={filteredMayor} title={'Mayor'} />
      </div>
    </div>
  );
};
