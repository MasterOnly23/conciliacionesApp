import { Link } from "react-router-dom";
import Comafi from "../../../assets/img/bancos/Comafi.png";
import Santander from "../../../assets/img/bancos/banco_santander.png";
import Galicia from "../../../assets/img/bancos/banco_galicia.png";
import ICBC from "../../../assets/img/bancos/banco_icbc.png";
import "./BankCard.css";

export const BankCard = () => {
  const banks = [
    { path: "/BancoComafi", name: "Banco Comafi", logo: Comafi },
    { path: "/BancoSantander", name: "Banco Santander", logo: Santander },
    { path: "/BancoGalicia", name: "Banco Galicia", logo: Galicia },
    { path: "/BancoICBC", name: "Banco ICBC", logo: ICBC },
  ];

  return (
    <div className="bankCard">
      {banks.map((bank, index) => (
        <Link to={bank.path} key={index}>
          <div className="bankCard-container">
            <div className="banckCard-img">
              <img src={bank.logo} alt="logo banco" />
            </div>
            <div className="banckCard-name">
              <h2>{bank.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
