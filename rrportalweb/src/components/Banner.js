import React, { useState, useEffect } from "react";
import "react-bootstrap"
import logo from '../images/img/logorr.svg';
import conexiones from '../images/img/conexiones.png';
import { useTranslation } from "react-i18next";
import TweenMax from 'gsap';
import $ from 'jquery';
import "../CSS/banner.css"
import { Tilt } from 'react-tilt'




const Banner = () => {
  useEffect(() => {
    const $body = $('body');
    const $panel = $('.carousel-caption'); // Cambia el selector al elemento que deseas aplicar el efecto
    const $pContent = $('.text-portada'); // Cambia el selector al elemento que deseas aplicar el efecto
    const $img = $('.logorr'); // Cambia el selector al elemento que deseas aplicar el efecto

    function initTilt() {
      TweenMax.set([$pContent, $img], { transformStyle: 'preserve-3d' });
      $body.mousemove(function (e) {
        tilt(e.pageX, e.pageY);
      });
    }

    function tilt(cx, cy) {
      // ... (resto del código de inclinación)
    }

    $body.mouseleave(function () {
      tilt($body.width() / 2, $body.height() / 2);
    });

    initTilt();
  }, []);

  return (
    <div  className="banner_home">
      <Tilt className="carousel-caption" options={{ max: 25, scale: 1.05 }}>

        <img src={logo} className="logorr" alt="Logo" />
      </Tilt>
        <img src={conexiones} className="conexiones"/>
      <div className="text-portada">
        <p>Proporcionamos el diseño de TI más responsivo y funcional para empresas y negocios a nivel mundial.</p>
        <h1>Nuestros consultores han trabajado del lado del negocio conociendo los procesos financieros y logísticos de una empresa</h1>
      </div>

    </div>
  );
}


export default Banner;
