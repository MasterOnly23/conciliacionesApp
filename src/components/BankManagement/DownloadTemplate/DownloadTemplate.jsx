import "./DownloadTemplate.css"
import { useState } from 'react';
import { DownloadTemplateModal } from './ModalDownloadTemplate/ModalDownloadTemplate';
import { useParams } from 'react-router-dom';

export const DownloadTemplate = () => {


    const { Banco } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const bankNames = {
        'BancoComafi': 'Comafi',
        'BancoSantander': 'Santander',
        'BancoGalicia': 'Galicia',
        'BancoICBC': 'ICBC'
      };

    return (
        <>
        <div className="download-template">
            <button onClick={handleShow}>Descargar Plantilla</button>
        </div>

        <DownloadTemplateModal show={show} handleClose={handleClose} bankName={bankNames[Banco]} />

        </>
    )
}