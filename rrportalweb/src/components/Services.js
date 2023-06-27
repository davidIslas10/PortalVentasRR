import React, { useMemo } from "react";
import separation from "../images/separation.png";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { getService, items } from "./items";
import Logos from "./Logos";
import Personage from "./Personage";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const Sap = () => {
  const [t, i18n] = useTranslation("global");
  const params = useParams();

  
  const service = useMemo(()=> getService(params.serviceid),

  [params.serviceid]
  
  );

  if(service==undefined){
    console.error("Item no encontrado");
    return false;
  }
  return (
    <div>
      <div className="service-background">
        <Navbar/>
        <div className="image-banner">
          <span>
            <img src={service.urlImage} />
          </span>
        </div>

        <div className="negocios-integrales">
          <div className="text-negocios">
            <span>{t("banner.home.negocios")}</span>
          </div>
          <div className="font-red">
            <span>{service.textRed1}
            <br></br>
              {service.textRed3}
            </span>
         
          </div>
          <div className="font-blue1">
            <span>{service.textblue1}</span>
          </div>
          <div className="font-blue1.1">
            <span>{service.textblue2}</span>
          </div>
        </div>
      </div>
      <div className="sap-banner">
        <div className="separations">
          <img src={separation} class="logo" />
        </div>

        <div className="Banner-sap">
          <div className="bannerSap-left">
            <div className="font-blue1.1">
              <span>OUR TECHNOLOGICAL OFFER</span>
            </div>
            <div className="font-red">
              <span>{service.textRed2}
              <br></br>
              {service.textRed3}
              </span>
            </div>
            <div className="text-blue5">
              <span ><img src={service.flecha} />{service.textBullets[0]}</span>
            </div>
            <div className="text-blue5">
              <span>
              <img src={service.flecha} />{service.textBullets[1]}
              </span>
            </div>
            <div className="text-blue5">
              <span>
              <img src={service.flecha} /> {service.textBullets[2]}
              </span>
            </div>
            <div className="text-blue5">
              <span>
              <img src={service.flecha} /> {service.textBullets[3]}
              </span>
            </div>
            <div className="text-blue5">
              <span>
              <img src={service.flecha} /> {service.textBullets[4]}
              </span>
            </div>
          </div>
          <div className="Banner-right">
            <div className="Nube-Service">
              <img src={service.imgNube} class="nube" />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="Contact-us">
          <span>Contact us</span>
        </div>
      </div>

      <div className="successful-center">
        <div className="successful">
          <span>
            Take a step forward to become one of our successful clients
          </span>
        </div>
      </div>
 
      <Logos/>
      <Personage/>
      <Footer/>
    </div>
  );
};

export default Sap;
