// import Table from 'react-bootstrap/Table';
import "./BankListComponent.css";

// export const BankListComponent = () => {
//     return (
//         <div className='m-5 table-container'>
//         <Table responsive className='table'>
//       <thead>
//         <tr>
//           <th className="border-right-custom">#</th>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <th className="border-right-custom" key={index}>Table heading</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="border-right-custom">1</td>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <td className="border-right-custom" key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="border-right-custom">2</td>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <td className="border-right-custom" key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//         <tr>
//           <td className="border-right-custom">3</td>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <td className="border-right-custom" key={index}>Table cell {index}</td>
//           ))}
//         </tr>
//       </tbody>
//     </Table>
//     </div>
//     );
// }
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNoConciliados(BankName, periodo);
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
