import React from "react";
import LogoIT from "../images/Logo.png";
import imageBanner from "../images/Banner Home.png";
import flechas from "../images/flecha-service.png";
import nuve from "../images/nuve_gris.png";
import BannerResponsive from "../images/MOBILE/BANNER HOME MOBILE.png";
import check from "../images/check.png";
import rectangle1 from "../images/Rectangle1.png";
import rectangle2 from "../images/Rectangle2.png";
import rectangle3 from "../images/Rectangle3.png";
import vector1 from "../images/vector1.png";
import vector2 from "../images/vector2.png";
import vector3 from "../images/vector3.png";
import vector4 from "../images/vector4.png";
import barra from "../images/barra.png";
import nuveRes from "../images/Imagen Home1.png";
import { useTranslation } from "react-i18next";
import "../style.css";
import "../index.css";

const Banner = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="container-banners">
      <div>
        <div class="banner">
          <div className="banner-left">
            <img src={LogoIT} class="logoIT" />
          </div>

          <div className="banner-right">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link dark" href="#">
                  {t("banner.navbar.home")}
                </a>
              </li>
              <li class="nav-item position-relative">
                <a class="nav-link" href="#">
                  {t("banner.navbar.service")}
                </a>
                <section class="menu-service">
                  <img class="img-flecha" src={flechas} />
                  <li class="nav-service">
                    <span class="iconos icon icon-sap-r3"></span>
                    <a class="nav-services" href="#">
                      SAP R3/ Hana & ABAP<br></br>
                      {t("banner.navbar.service-sap")}
                    </a>
                  </li>
                  <li class="nav-service">
                    <span class="iconos icon icon-Icono-ux"></span>
                    <a class="nav-services" href="#">
                      {t("banner.navbar.service-uxui")}
                    </a>
                  </li>
                  <li class="nav-service">
                    <span class="iconos icon icon-software-development"></span>
                    <a class="nav-services" href="#">
                      {t("banner.navbar.service-software_develop")}
                      <br></br>
                      {t("banner.navbar.service-Web_Mobile")}
                    </a>
                  </li>
                  <li class="nav-service">
                    <span class="iconos icon icon-powerapps"></span>
                    <a class="nav-services" href="#">
                      PowerApps<br></br>
                      {t("banner.navbar.service-powerapps")}
                    </a>
                  </li>
                  <li class="nav-service">
                    <span class="iconos icon icon-data-analytics"></span>
                    <a class="nav-services" href="#">
                      {t("banner.navbar.service-analitic")}
                    </a>
                  </li>
                  <li class="nav-service">
                    <span class="iconos icon icon-project-managments"></span>
                    <a class="nav-services" href="#">
                      {t("banner.navbar.service_project_managments")}
                      <br></br>
                      (SCRUM-KANBAN)
                    </a>
                  </li>
                </section>
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
      <div className="image-banner">
        <span>
          <img src={imageBanner} />
        </span>
      </div>
      <div className="banner-responsive">
        <img class="img-responsive" src={BannerResponsive} />
      </div>

      <div className="negocios-integrales">
        <div className="text-negocios">
          <span>{t("banner.home.negocios")}</span>
        </div>
        <div className="font-red">
          <span>{t("banner.home.wekeep")}</span>
        </div>
        <div className="font-blue1">
          <span>{t("banner.home.wesupply")}</span>
        </div>
        <div className="font-blue1.1">
          <span>{t("banner.home.businesses")}</span>
        </div>
        <div className="red">
          <span>{t("banner.home.weare")}</span>
          <img class="img-responsive" src={barra} />
        </div>
        <div className="text-blue3">
          <span>{t("banner.home.r&r")}</span>
        </div>
        <div className="text-blue4">
          <span>{t("banner.home.founded")}</span>
        </div>
        <div className="text-blue5">
          <span>{t("banner.home.enjoy")}</span>
        </div>
        <div className="text-gris1">
          <span>{t("banner.home.resolve")}</span>
        </div>
        <div className="text-gris2">
          <span>{t("banner.home.reliable")}</span>
        </div>
        <div className="text-gris3">
          <span>{t("banner.home.experts")}</span>
        </div>
        <div className="check">
          <img class="img-check" src={check} />
        </div>
        <div className="check-2">
          <img class="img-check-2" src={check} />
        </div>

        <div className="check-3">
          <img class="img-check.3" src={check} />
        </div>

        <div className="rectangle-1">
          <img class="img-rectangle1" src={rectangle1} />
        </div>
        <div className="rectangle-2">
          <img class="retangle2" src={rectangle2} />
        </div>

        <div className="rectangle-3">
          <img class="rectangle3" src={rectangle3} />
        </div>

        <div className="vector1-nube">
          <img class="vector1" src={vector1} />
        </div>
        <div className="vector2-nube">
          <img class="vector2" src={vector2} />
        </div>
        <div className="vector3-nube">
          <img class="vector3" src={vector3} />
        </div>
        <div className="vector4-nube">
          <img class="vector4" src={vector4} />
        </div>

        <div className="banner-walpper">
          <img class="img-nuve" src={nuve} />
        </div>
      </div>

      <div className="negocios-responsive">
        <div className="blue1-responsive">
          <span>
            We supply the most responsive and functional IT design for
            businesses and businesses worldwide
          </span>
          <div className="banner-walpper/responsive">
            <img class="img-nuve" src={nuveRes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
