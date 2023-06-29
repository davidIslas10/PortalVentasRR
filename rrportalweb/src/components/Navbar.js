import React, { useState } from "react";
import LogoMobile from "../images/R&R Fondo Blanco.svg";
import { HeaderWrapper } from "./Header";
import Navresp from "./navresp";
import MenuButton from "./MenuButton";
import { useTranslation } from "react-i18next";
import LogoIT from "../images/Logo.png";
import flechas from "../images/flecha-service.png";
import { Link } from "react-router-dom";
import { items } from "./items";
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
    <div>
      <nav class="navbar" style={{ backgroundColor: "#223E69" }}>
        <div class="container">
          <div className="navbar-left">
            <a href="#" class="icon icon-correo-electronico" />
            <a href="https://api.whatsapp.com/send/?phone=5215532253411&text=%C2%A1Hola%21+estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" class="icon icon-telefono" />
            <div class="text-translate">
              <a onClick={() => i18n.changeLanguage("es")}>ESP</a>
              <span>|</span>
              <a onClick={() => i18n.changeLanguage("en")}>ING</a>
            </div>
          </div>

          <div className="navbar-right">
            <a href="https://www.instagram.com/rrit_consulting/" class="icon icon-instagram" />
            <a href="https://mx.linkedin.com/company/r-r-i-t-consulting" class="icon icon-linkedin" />
            <a href="https://api.whatsapp.com/send/?phone=5215532253411&text=%C2%A1Hola%21+estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" class="icon icon-whatsapp" />
          </div>
        </div>

        <div class="responsive">
          <div class="logo-responsive">
            <img src={LogoMobile} class="logo" />
          </div>

          <div class="translate-responsive">
            <a href="#">ESP</a>
            <span>|</span>
            <a href="#">ING</a>
          </div>
        </div>

        <HeaderWrapper>
          <Navresp open={open} />
          <MenuButton open={open} handleClick={handleClick} />
        </HeaderWrapper>
      </nav>

      <div className="container-banners">
        <div>
          <div class="banner">
            <div className="banner-left">
              <img src={LogoIT} class="logoIT" />
            </div>

            <div className="banner-right">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link dark" href="/">
                    {t("banner.navbar.home")}
                  </a>
                </li>
                <li class="nav-item position-relative">
                  <a class="nav-link" href="#">
                    {t("banner.navbar.service")}
                  </a>
                  {items.map((item) => (
                    <section class="menu-service">
                      <img class="img-flecha" src={flechas} />
                      <li class="nav-service">
                        <span class="iconos icon icon-sap-r3"></span>
                        <Link
                          class="nav-services"
                          to={`/service/${(item.id = 0)}`}
                        >
                          SAP R3/ Hana & ABAP<br></br>
                          {t("banner.navbar.service-sap")}
                        </Link>
                      </li>
                      <li class="nav-service">
                        <span class="iconos icon icon-Icono-ux"></span>
                        <Link class="nav-services" to={`/service/${(item.id = 2)}`}>
                          {t("banner.navbar.service-uxui")}
                        </Link>
                      </li>
                      <li class="nav-service">
                        <span class="iconos icon icon-software-development"></span>
                        <Link class="nav-services" to={`/service/${(item.id = 4)}`}>
                          {t("banner.navbar.service-software_develop")}
                          <br></br>
                          {t("banner.navbar.service-Web_Mobile")}
                        </Link>
                      </li>
                      <li class="nav-service">
                        <span class="iconos icon icon-powerapps"></span>
                        <Link class="nav-services" to={`/service/${(item.id = 1)}`}>
                          PowerApps<br></br>
                          {t("banner.navbar.service-powerapps")}
                        </Link>
                      </li>
                      <li class="nav-service">
                        <span class="iconos icon icon-data-analytics"></span>
                        <Link class="nav-services" to={`/service/${(item.id = 3)}`}>
                          {t("banner.navbar.service-analitic")}
                        </Link>
                      </li>
                      <li class="nav-service">
                        <span class="iconos icon icon-project-managments"></span>
                        <Link class="nav-services" to={`/service/${(item.id = 5)}`}>
                          {t("banner.navbar.service_project_managments")}
                          <br></br>
                          (SCRUM-PMI)
                        </Link>
                      </li>
                    </section>
                  ))}
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {t("banner.navbar.about")}
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {t("banner.navbar.careers")}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {t("banner.navbar.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
