import { useTable } from "react-table";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
export const HistorialTableComponent = ({ columns, data, title }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table-contain">
      <div className="d-flex justify-content-center title-table-container">
        <h3>{title.toUpperCase()}</h3>
      </div>
      <table
        id="kt_table_criterion"
        className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer responsive "
        {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, j) => (
                <th
                  {...column.getHeaderProps()}
                  key={j}
                  className="text-center rows-header">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className="text-gray-600 fw-bold text-center"
          {...getTableBodyProps()}>
          {rows.length > 0 ? (
            rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={i} className="rows-cell">
                  {row.cells.map((cell, j) => {
                    const cellValue = cell.value;
                    const cellStyle =
                      cell.column.Header === "Extracto Monto" ||
                      cell.column.Header === "Mayor Monto"
                        ? cellValue < 0
                          ? { color: "red" }
                          : { color: "green" }
                        : {};

                    return (
                      <td
                        {...cell.getCellProps()}
                        key={j}
                        className="rows-body"
                        style={cellStyle}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={14}>
                <div className="d-flex text-center w-100 align-content-center justify-content-center">
                  No hay registros
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

HistorialTableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
