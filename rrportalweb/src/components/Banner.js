import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap"
import portada from '../images/img/portada.png';
import logo from '../images/img/logorr.svg';
import portadam from '../images/img/portada-m.png';
import { useTranslation } from "react-i18next";
import "../CSS/banner.css"




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

  return (

    <div className="container-banners">
      <div class="carousel-caption">
        <img src={logo} class="logorr" />
        <div className="text-portada">
          <h3>We Keep great ideas alive!</h3>
          <p>Proporcionamos el diseño de TI más responsivo y funcional para empresas y negocios a nivel mundial.</p>
          <h1>Nuestros consultores han trabajado del lado del negocio conociendo los procesos financieros y logisticos de una empresa</h1>
        </div>
      </div>
      <div className="portada">
        <img src={portadam} class="portadam" />
        <img src={portada} class="portada" />
        <div className="blur"></div>
      </div>
    </div>

  );
};


export default Banner;
