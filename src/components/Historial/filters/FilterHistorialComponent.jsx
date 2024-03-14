import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FilterHistorialComponent.css";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
export const FilterHistorialComponent = ({
  setBankName,
  setMonto,
  setPeriodo,
  periodo,
  isLoading,
}) => {
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        // onSearch();
      }}>
      <div className="d-flex justify-content-center  ms-3 me-3">
        <div className="filtros-container d-flex gap-5 mt-5 p-3 border rounded bg-white">
          <Form.Group className="mb-0" controlId="datePicker">
            <Form.Label>Periodo:</Form.Label>
            <DatePicker
              selected={periodo}
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
                type="number"
                placeholder="Valor absoluto"
                className="input-without-arrows text-center"
                onChange={(event) => setMonto(event.target.value)}
                disabled={isLoading}
              />
            </div>
          </Form.Group>
        </div>
        <div className="d-flex mt-5 ms-3">
        </div>
      </div>
    </Form>
  );
};

FilterHistorialComponent.propTypes = {
  setBankName: PropTypes.func.isRequired,
  setMonto: PropTypes.func,
  setPeriodo: PropTypes.func.isRequired,
  periodo: PropTypes.instanceOf(Date),
  isLoading: PropTypes.bool.isRequired,
};
