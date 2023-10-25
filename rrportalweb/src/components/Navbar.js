import React, { useState } from "react";
import { HeaderWrapper } from "./Header";
import Navresp from "./navresp";
import MenuButton from "./MenuButton";
import { useTranslation } from "react-i18next";
import LogoIT from "../images/img/logo.svg";
import flag_usa from "../images/flagUsa.png";
import headhunter from "../images/img/headhunter.png";
import logotipo_sap from "../images/img/logotipo_sap.png";
import linkedin from "../images/img/linkedin.png";
import whatsapp from "../images/img/whatsapp.png";
import instagram from "../images/img/instagram.png";
import "../CSS/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
function useActive() {
  const [active, setActive] = useState(false);
  const haleTrue = () => setActive(true);
  const haleFalse = () => setActive(false);

  return {
    active,
    haleTrue,
    haleFalse,
  };
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [t, i18n] = useTranslation("global");
  return (
    <div className="container-navbar">
      <nav class="navbar" style={{ backgroundColor: "#223E69" }}>
        <div class="container">
          <div className="navbar-left">
            <img src={LogoIT} class="logoIT" />
          </div>
          <div className="navbar-right">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link dark" href="/">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Acercade">
                  {t("banner.navbar.about")}
                </a>
              </li>
              <li class="nav-item position-relative">
                <Dropdown>

                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Servicios
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/Desarrollo-software"><span className="iconos icon icon-software-development" />Desarrollo de Software</Dropdown.Item>
                    <Dropdown.Item href="/DataScientist"><span className="iconos icon icon-data-analytics" />Data Scientist</Dropdown.Item>
                    <Dropdown.Item href="/ERP"><span className="iconos icon icon-sap-r3" />ERP Service</Dropdown.Item>
                    <Dropdown.Item href="/Project-Management"><span className="iconos icon icon-project-managments" />Project Management</Dropdown.Item>
                    <Dropdown.Item href="/Power-Apps"><span className="iconos icon icon-powerapps" />Power Apps</Dropdown.Item>
                    <Dropdown.Item href="/Head-Hunter"><img className="hunter-m" src={headhunter} />Head Hunter</Dropdown.Item>
                    <Dropdown.Item href="/UxUi"><span className="iconos icon icon-Icono-ux" />UX-UI</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  {t("banner.navbar.careers")}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trascender
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact">
                  Contacto
                </a>
              </li>
              <li> <img src={flag_usa} class="flagusa" /></li>
              <li class="lenguage">

              </li>

            </ul>
            {/* <div class="text-translate">
              <a onClick={() => i18n.changeLanguage("es")}>ESP</a>
              <span>|</span>
              <a onClick={() => i18n.changeLanguage("en")}>ING</a>
            </div> */}
          </div>
        </div>


        <HeaderWrapper>
          <Navresp open={open} />
          <MenuButton open={open} handleClick={handleClick} />
        </HeaderWrapper>
      </nav>
      <div class="col-md-12">
        <ul class="social-network social-circle">
          <a href="https://www.linkedin.com/company/r-r-i-t-consulting/mycompany/" target="_blank" className="linkedin"><img src={linkedin} /></a>
          <a className="instagram" href="https://www.instagram.com/rrit_consulting/" target="_blank"><img src={instagram} /></a>
          <a className="whatsapp" href="https://wa.me/5525386986" target="_blank"><img src={whatsapp}/></a>
          <a href="https://discovery.ariba.com/profile/AN01439983823" target="_blank">
            <img alt="Ver el perfil de NEGOCIOS INTEGRALES CMJ SA DE CV en SAP Business Network Discovery" src={logotipo_sap} />
          </a>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
