import React from "react";
import LogoIT from "../images/Logo.png";
import imageBanner from "../images/Banner Home.png";
import flechas from "../images/flecha-service.png";
import nuve from "../images/nuve_gris.png";
import BannerResponsive from "../images/Banner Home.png";
import check from "../images/check.png";
import Nube from "../images/Imagen Home1.png";
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

      <div className="banner-separation">
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
            <img class="img-check" src={check} />
            <span>{t("banner.home.resolve")}</span>
          </div>
          <div className="text-gris2">
            <img class="img-check-2" src={check} />
            <span>{t("banner.home.reliable")}</span>
          </div>
          <div className="text-gris3">
            <img class="img-check.3" src={check} />
            <span>{t("banner.home.experts")}</span>
          </div>
        </div>

        <div className="Nube">
          <img src={Nube} class="nube" />
        </div>
      </div>

      {/* 

      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      !!!!!!!!Esta es la version Mobile!!!!!!!!!!
      
      */}

      <div className="negocios-responsive">
        <div className="banner-responsive">
          <img class="img-responsive" src={BannerResponsive} />
        </div>

        <div className="text-negocios">
          <span>{t("banner.home.negocios")}</span>
        </div>
        <div className="font-red">
          <span>{t("banner.home.wekeep")}</span>
        </div>

        <div className="blue1-center">
          <div className="font-blue1">
            <span>
              We supply the most responsive and functional IT design for
              businesses and businesses worldwide
            </span>
          </div>
        </div>

        <div className="red-center">
          <div className="red">
            <span>{t("banner.home.weare")}</span>
          </div>
        </div>

        <div className="banner-walpper/responsive">
          <img class="img-nuve" src={nuveRes} />
        </div>

        <div className="text-blue4">
          <span>
            R&R IT Consuling is an IT consultancy based in Mexico founded in
            2010.
          </span>
        </div>

        <div className="text-blue5">
          <span>{t("banner.home.enjoy")}</span>
        </div>

        <div className="text-check">
          <div className="text-gris1">
            <img class="img-check" src={check} />
            <span>{t("banner.home.resolve")}</span>
          </div>
          <div className="text-gris2">
            <img class="img-check-2" src={check} />
            <span>{t("banner.home.reliable")}</span>
          </div>
          <div className="text-gris3">
            <img class="img-check.3" src={check} />
            <span>{t("banner.home.experts")}</span>
          </div>
        </div>
      </div>

      {/*VERSION MOBILE*/}
    </div>
  );
};

export default Banner;
