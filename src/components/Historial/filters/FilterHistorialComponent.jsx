import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterHistorialComponent.css";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Reset from "../../../assets/img/icons/reset.svg";
import { HistorialPaginationComponent } from "../table/pagination/HistorialPaginationComponent"
import { set } from "date-fns";
export const FilterHistorialComponent = ({
  bankName,
  setBankName,
  setMonto,
  monto,
  setPeriodo,
  periodo,
  isLoading,
  checkYearAgo,
  setCheckYearAgo,
  limit,
  setLimit,
}) => {
  const handleResetFilters = () => {
    setBankName("");
    setMonto("");
    setPeriodo(null);
    setCheckYearAgo(true);
    setLimit(10);
  };
  const handleChangeLimit = (event) => {
    setLimit(Number(event.target.value));
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        // onSearch();
      }}>
      <div className="d-flex justify-content-center  ms-3 me-3">
        <div className="filtros-container d-flex gap-5 mt-3 p-3 border rounded bg-white">
          <Form.Group className="mb-0" controlId="datePicker">
            <Form.Label>Periodo:</Form.Label>
            <DatePicker
              selected={periodo || ""}
              onChange={(date) => {
                setPeriodo(date);
              }}
              dateFormat="yyyy/MM"
              showMonthYearPicker
              className="date-picker p-1 text-center cursor-pointer"
              disabled={isLoading}
            />
          </Form.Group>
          <Form.Group className="d-flex gap-2" controlId="bankName">
            <div className="d-flex align-items-center">
              <Form.Label className="mb-0">Nombre del banco:</Form.Label>
            </div>
            <div className="d-flex align-items-center">
              <Form.Select
                value={bankName}
                className="text-center cursor-pointer"
                onChange={(event) => setBankName(event.target.value)}
                disabled={isLoading}>
                <option value="" className="cursor-pointer">
                  Todos
                </option>
                <option value="Comafi" className="cursor-pointer">
                  Banco Comafi
                </option>
                <option value="Santander" className="cursor-pointer">
                  Banco Santander
                </option>
                <option value="Galicia" className="cursor-pointer">
                  Banco Galicia
                </option>
                <option value="ICBC" className="cursor-pointer">
                  Banco ICBC
                </option>
              </Form.Select>
            </div>
          </Form.Group>

          <Form.Group className="d-flex gap-2" controlId="monto">
            <div className="d-flex align-items-center">
              <Form.Label className="mb-0">Monto:</Form.Label>
            </div>
            <div className="d-flex align-items-center">
              <Form.Control
                value={monto}
                type="number"
                placeholder="Valor absoluto"
                className="input-without-arrows text-center"
                onChange={(event) => setMonto(event.target.value)}
                disabled={isLoading}
              />
            </div>
            <HistorialPaginationComponent
              handleChangeLimit={handleChangeLimit}
              limit={limit}
              isLoading={isLoading}
            />
          </Form.Group>
          <Form.Group className="d-flex align-items-center">
            <div>
              <Form.Label className="mb-0">Ultimo año</Form.Label>
            </div>
            <Form.Check
              type="checkbox"
              className="ms-2"
              checked={checkYearAgo}
              onChange={(e) => setCheckYearAgo(e.target.checked)}
            />
          </Form.Group>
          <button onClick={handleResetFilters}>
            <img src={Reset} alt="Reset Filter" />
          </button>
        </div>

        {/* <div className="d-flex mt-5 ms-3"></div> */}
      </div>
    </Form>
  );
};

FilterHistorialComponent.propTypes = {
  bankName: PropTypes.string.isRequired,
  setBankName: PropTypes.func.isRequired,
  setMonto: PropTypes.func,
  monto: PropTypes.number,
  setPeriodo: PropTypes.func.isRequired,
  periodo: PropTypes.instanceOf(Date),
  isLoading: PropTypes.bool.isRequired,
  checkYearAgo: PropTypes.bool.isRequired,
  setCheckYearAgo: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
};
