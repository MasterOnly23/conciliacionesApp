import { useState, useEffect } from 'react';
import { SubHeader } from "../Header/SubHeader/SubHeader";
import { DragFileComponent } from "./DragFileComponent/DragFileComponent"
import { DownloadTemplate } from "./DownloadTemplate/DownloadTemplate"
import { useParams } from 'react-router-dom';

export const BankManagement = () => {
    const { Banco } = useParams();
    const [file, setFile] = useState(null);

    useEffect(() => {
        setFile(null);
    }, [Banco]);

    return(
        <>
        <SubHeader />
        <DownloadTemplate/>
        <DragFileComponent bankName={Banco} file={file} setFile={setFile} />
        </>
    )
}