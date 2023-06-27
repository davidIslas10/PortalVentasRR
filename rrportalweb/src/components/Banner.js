import React, { useState } from "react";
import LogoIT from "../images/Logo.png";
import imageBanner from "../images/Banner Home.png";
import BannerResponsive from "../images/Banner Home.png";
import check from "../images/check.png";
import Nube from "../images/Imagen Home1.png";
import nuveRes from "../images/Imagen Home1.png";
import { useTranslation } from "react-i18next";
import "../style.css";
import "../index.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


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

const Banner = () => {
  const [t, i18n] = useTranslation("global");
  const { active, haleTrue } = useActive();

  return (

    <div className="container-banners">
        <Navbar hasToBeRendered={false} />

    
        <div>
          <div class="banner">
            <div className="banner-left">
              <img src={LogoIT} class="logoIT" />
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
