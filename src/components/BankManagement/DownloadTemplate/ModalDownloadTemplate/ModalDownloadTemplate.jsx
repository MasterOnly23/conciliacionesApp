import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./ModalDownloadTemplate.css";
import Comafi from "../../../../assets/img/bancos/banco_comafi.webp";
import Santander from "../../../../assets/img/bancos/banco_santander.png";
import Galicia from "../../../../assets/img/bancos/banco_galicia.png";
import ICBC from "../../../../assets/img/bancos/banco_icbc.png";
import { downloadTemplate } from "../../core/_requests";

export const DownloadTemplateModal = ({ show, handleClose, bankName }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const { Banco } = useParams();

  const logos = {
    Comafi: Comafi,
    Santander: Santander,
    Galicia: Galicia,
    ICBC: ICBC,
    // Añade más bancos y logos aquí
  };

  const handleDownload = async () => {
    setIsLoading(true);
    const response = await downloadTemplate(Banco, selectedDate);

  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <div className="ModalTittle-container">
          <span>
          Plantilla Banco {bankName}
          </span>
          <span>
          <img className="ModalTittle-img" src={logos[bankName]} alt={`Logo ${bankName}`} style={{ marginLeft: '10px' }} />
          </span>
          </div>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="bankName">
              <Form.Label>Nombre del banco:</Form.Label>
              <Form.Control
                type="text"
                value={bankName.toUpperCase()}
                autoFocus
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="datePicker">
              <Form.Label>Periodo:</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM"
                showMonthYearPicker
                className="date-picker"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleDownload}>
            Descargar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DownloadTemplateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  bankName: PropTypes.string.isRequired,
};
