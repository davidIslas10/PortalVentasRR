import React from "react";
import { NavbarWrapper } from "./navbarStyles";
import LogoMobile from "../images/Logo.png";
import Accordion from 'react-bootstrap/Accordion';




function navresp({ open }) {

  return (
    <NavbarWrapper open={open}>
      <div className="container-menu-mobile">
        <div className="position">
          <a href="/">Inicio</a>
          <a href="/Acercade">Acerca de</a>
          <a href="#">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Services</Accordion.Header>
                <Accordion.Body>
                  <ul class="nav justify-content-center">
                    <li class="nav-item">
                    <span className="iconos icon icon-software-development"/>
                      <a class="nav-link dark" href="/Desarrollo-software">
                        Desarrollo de Softaware
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-data-analytics"/>
                      <a class="nav-link dark" href="/DataScientist">
                        Data Scientist
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-sap-r3"/>
                      <a class="nav-link dark" href="/ERP">
                        ERP Service
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-project-managments"/>
                      <a class="nav-link dark" href="/Project-Management">
                        Project Management
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-powerapps"/>
                      <a class="nav-link dark" href="/Power-Apps">
                        Power Apps
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-sap-r3"/>
                      <a class="nav-link dark" href="/Head-Hunter">
                        Head Hunter
                      </a>
                    </li>
                    <li class="nav-item">
                    <span className="iconos icon icon-Icono-ux"/>
                      <a class="nav-link dark" href="/UxUi">
                        UX-UI
                      </a>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </a>
          {/* <a href="#">Trascender</a> */}
          <a href="#">Contacto</a>
        </div>
        <img src={LogoMobile} class="logomobile" />
        <div className="redes-mobile">
          <a href="https://www.instagram.com/rrit_consulting/" target="_blank" class="icon icon-instagram" />
          <a href="https://mx.linkedin.com/company/r-r-i-t-consulting" target="_blank" class="icon icon-linkedin" />
          <a href="https://api.whatsapp.com/send/?phone=5215532253411&text=%C2%A1Hola%21+estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" target="_blank" class="icon icon-whatsapp" />
        </div>
      </div>

    </NavbarWrapper>
  );
}

export default navresp;
