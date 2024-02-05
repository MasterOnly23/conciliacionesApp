import { BankCard } from "./BankCard/BankCard";
import "./DashBoard.css";

export const DashBoard = () => {
    return (
        <>
        <div className="container-dashboard">
        <BankCard />
        </div>
        </>
    );
}