import { useParams } from "react-router-dom";
import "./SubHeader.css";
import Logo1 from "../../../assets/img/logo.png";
import Logo2 from "../../../assets/img/logo.png";

export const SubHeader = () => {

const logos = {
        banco1: Logo1,
        banco2: Logo2,
        // Añade más bancos y logos aquí
      };

const { banco } = useParams();

  return (
    <div className="subheader">
        <div className="subheader-container">
        <img src={logos[banco]} alt="" />
      <h1>{banco.toUpperCase()}</h1>
        </div>
    </div>
  );
};