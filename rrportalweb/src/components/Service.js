import React from "react";
import "../index.css";
import separation from "../images/separation.png";
import Sap from "../images/SAP R3.png";
import Software from "../images/Software Development.png";
import Analytics from "../images/Data & Analytics.png";
import uxDesign from "../images/UX UI Design.png";
import PowerApps from "../images/PowerApps Development.png";
import Managment from "../images/Project Managment.png";
import banner3 from "../images/Imagen Home 2.png";
import nubBanner3 from "../images/Nube-Gris.png";
import barra from "../images/barra.png";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

const Service = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="services">
      <div className="separation">
        <img src={separation} class="logo" />
      </div>
      <div className="service-font-red">
        <span>
          {t("service.provide")}
          <br></br>
          {t("service.success")}
        </span>
      </div>
      <div className="service-font-red-mobile">
        <span>
          {t("service.provide")}
          {t("service.success")}
        </span>
      </div>

      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block" src={Sap} alt="First slide" />
          <div className="shadow">
            <a>SAP R3/</a>
            <a>Hana & ABAP resources</a>
          </div>
          <br></br>
          <img className="d-block" src={Software} alt="First slide" />
          <div className="shadow">
            <h3>Software Development</h3>
            <p>(Web & Mobile)</p>
          </div>
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={Analytics} alt="First slide" />
          <div className="shadow">
            <p>Data & Analytics</p>
          </div>
          <br></br>
          <img className="d-block" src={uxDesign} alt="First slide" />
          <div className="shadow">
            <p>UX/UI Design</p>
          </div>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={PowerApps} alt="First slide" />
          <div className="shadow">
            <p>PowerApps Development </p>
          </div>
          <br></br>
          <img className="d-block" src={Managment} alt="First slide" />
          <div className="shadow">
            <p>Project Managment</p>
          </div>
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="images-services">
        <div className="sap">
          <figure>
            <img src={Sap} />
            <div className="shadow">
              <h3>SAP R3/</h3>
              <p>Hana & ABAP resources</p>
            </div>
            <div class="capa">
              <h3>SAP R3/</h3>
              <p>Hana & ABAP resources</p>
            </div>
          </figure>
        </div>

        <div className="develop">
          <figure>
            <img src={Software} class="logoSoftware" />
            <div className="shadow">
              <h3>Software Development</h3>
              <p>(Web & Mobile)</p>
            </div>
            <div class="capa">
              <h3>Software Development</h3>
              <p>(Web & Mobile)</p>
            </div>
          </figure>
        </div>
        <div className="analytic">
          <figure>
            <img src={Analytics} class="logoAnalitics" />
            <div className="shadow">
              <p>Data & Analytics</p>
            </div>
            <div class="capa">
              <p>Data & Analytics</p>
            </div>
          </figure>
        </div>
        <div className="desing">
          <figure>
            <img src={uxDesign} class="logoDesign" />
            <div className="shadow">
              <p>UX/UI Design</p>
            </div>
            <div class="capa">
              <p>UX/UI Design</p>
            </div>
          </figure>
        </div>
        <div className="apps">
          <figure>
            <img src={PowerApps} class="logoPowerApp" />
            <div className="shadow">
              <p>PowerApps Development </p>
            </div>
            <div class="capa">
              <p>PowerApps Development </p>
            </div>
          </figure>
        </div>
        <div className="manage">
          <figure>
            <img src={Managment} class="logoManagment" />
            <div className="shadow">
              <p>Project Managment</p>
            </div>
            <div class="capa">
              <p>Project Managment</p>
            </div>
          </figure>
        </div>
      </div>

      <div className="banner3">
        <div className="fondo-banner3">
          <img src={nubBanner3} class="logoManagment" />
        </div>
        <div className="service-blue3">
          <span>{t("service.modalities")}</span>
        </div>
        <div className="img-banner3">
          <img src={banner3} class="logoManagment" />
        </div>
        <div className="red1">
          <span>{t("service.shore")}</span>
          <img class="img-responsive" src={barra} />
        </div>
        <div className="gris1">
          <span>{t("service.located")}</span>
        </div>
        <div className="red2">
          <span>{t("service.mid")}</span>
          <img class="img-responsive" src={barra} />
        </div>
        <div className="gris2">
          <span>{t("service.middle")}</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
