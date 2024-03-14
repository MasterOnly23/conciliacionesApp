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
import { Loadder } from "../../../Loadder/Loadder";

export const DownloadTemplateModal = ({ show, handleClose, bankName }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const logos = {
    Comafi: Comafi,
    Santander: Santander,
    Galicia: Galicia,
    ICBC: ICBC,
    // Añade más bancos y logos aquí
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const formattedDate = `${year}/${month < 10 ? "0" + month : month}`;
      // const bank = Banco.substring(5).toUpperCase();
      const response = await downloadTemplate(bankName.toUpperCase(), formattedDate);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Conciliaciones-${bankName}-${formattedDate}.xlsx`);
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        setIsLoading(false);
        handleClose();
      }, 1000);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <div className="ModalTittle-container">
              <span>Plantilla Banco {bankName}</span>
              <span>
                <img
                  className="ModalTittle-img"
                  src={logos[bankName]}
                  alt={`Logo ${bankName}`}
                  style={{ marginLeft: "10px" }}
                />
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
          {isLoading ? (
              <Loadder position={'absolute'}/>
           ) : (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="success" onClick={handleDownload}>
                Descargar
              </Button>
            </> 
          )}
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
