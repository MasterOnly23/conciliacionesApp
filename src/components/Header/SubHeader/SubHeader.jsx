import { useParams } from "react-router-dom";
import "./SubHeader.css";
import Comafi from "../../../assets/img/bancos/banco_comafi.webp";
import Santander from "../../../assets/img/bancos/banco_santander.png";
import Galicia from "../../../assets/img/bancos/banco_galicia.png";
import ICBC from "../../../assets/img/bancos/banco_icbc.png";

export const SubHeader = () => {

const logos = {
        BancoComafi: Comafi,
        BancoSantander: Santander,
        BancoGalicia: Galicia,
        BancoICBC: ICBC,
        // Añade más bancos y logos aquí
      };

const nombresBancos = {
    "BancoComafi": "Banco Comafi",
    "BancoSantander": "Banco Santander",
    "BancoGalicia": "Banco Galicia",
    "BancoICBC": "Banco ICBC",
  };

const { Banco } = useParams();

  return (
    <div className="subheader">
        <div className="subheader-container">
        <img src={logos[Banco]} alt="" />
      <h1>{nombresBancos[Banco]}</h1>
        </div>
    </div>
  );
};