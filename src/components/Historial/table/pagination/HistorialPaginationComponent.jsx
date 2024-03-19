import propTypes from 'prop-types';
import Form from "react-bootstrap/Form";

export const HistorialPaginationComponent = ({ handleChangeLimit, limit, isLoading }) => {
    

    return (
        <Form.Group className="d-flex gap-2" controlId="bankName">
            <div className="d-flex align-items-center">
              <Form.Label className="mb-0">Cantidad</Form.Label>
            </div>
            <div className="d-flex align-items-center">
              <Form.Select
                value={limit}
                className="text-center cursor-pointer"
                onChange={handleChangeLimit}
                disabled={isLoading}>
                <option value="10" className="cursor-pointer">
                  10
                </option>
                <option value="20" className="cursor-pointer">
                  15
                </option>
                <option value="30" className="cursor-pointer">
                  20
                </option>
                <option value="40" className="cursor-pointer">
                  25
                </option>
                <option value="50" className="cursor-pointer">
                  50
                </option>
                
              </Form.Select>
            </div>
          </Form.Group>
    )
}

HistorialPaginationComponent.propTypes = {
    handleChangeLimit: propTypes.func.isRequired,
    limit: propTypes.number.isRequired,
    isLoading: propTypes.bool.isRequired
}