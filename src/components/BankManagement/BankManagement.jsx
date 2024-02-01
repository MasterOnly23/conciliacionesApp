import { SubHeader } from "../Header/SubHeader/SubHeader";
import { DragFileComponent } from "./DragFileComponent/DragFileComponent"
import { DownloadTemplate } from "./DownloadTemplate/DownloadTemplate"

export const BankManagement = () => {


    return(
        <>
        <SubHeader />
        <DownloadTemplate/>
        <DragFileComponent />
        </>
    )
}