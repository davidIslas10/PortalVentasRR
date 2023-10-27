import React from "react";
import logo from "../images/Logo.png";
import "../CSS/footer.css";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="home3">
        <footer>
          <div className="fotter-blue">
            <img src={logo} class="logor" />
            <div className="footer-text">
              <span>Capitalizamos el conocimiento de <strong> muchos años de experiencia </strong> en la administración de empresas y participación en la implementación de proyectos</span>
            </div>
          </div>
          <div className="footer-right">
            <div className="up">
              <a href="https://www.instagram.com/rrit_consulting/" target="_blank" class="icon icon-instagram" />
              <a href="https://mx.linkedin.com/company/r-r-i-t-consulting"target="_blank" class="icon icon-linkedin" />
              <a href="https://api.whatsapp.com/send/?phone=5215532253411&text=%C2%A1Hola%21+estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" target="_blank" class="icon icon-whatsapp" />
            </div>
            <div className="down">
              <a href="tel:+525525386986"><FaPhone/>+52 (55) 2538 6986</a>
              <a href="mailto:admin@itconsultingrr.com"><FiMail/> admin@itconsultingrr.com</a>
            </div> 
          </div>
        </footer>
        <div className="footer-foot">NEGOCIOS INTEGRALES CMJ, todos los derechos reservados (c) 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
