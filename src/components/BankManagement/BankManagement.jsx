import { SubHeader } from "../Header/SubHeader/SubHeader";
import { DragFileComponent } from "./DragFileComponent/DragFileComponent"
import { DownloadTemplate } from "./DownloadTemplate/DownloadTemplate"
import { useParams } from 'react-router-dom';

export const BankManagement = () => {

    const { Banco } = useParams();


    return(
        <>
        <SubHeader />
        <DownloadTemplate/>
        <DragFileComponent bankName={Banco} />
        </>
    )
}