import React, { useState } from "react";
import "../CSS/services.css";
import desarrollo from "../images/img/desarrollo.png";
import data from "../images/img/data.png";
import erp from "../images/img/erp.jpg";
import clientes from "../images/img/clientes.jpg";
import project from "../images/img/project.png";
import power from "../images/img/power.png";
import hunter from "../images/img/hunter.png";
import uxui from "../images/img/uxui.png";
import triangulo from '../images/img/triangulo.png';
import { useTranslation } from "react-i18next";
import Carrusel from "./Carrusel";


const Service = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const toggleAnimation = () => {
    setIsAnimationEnabled(!isAnimationEnabled);
  };

  const iconCardsContentClass = `icon-cards__content ${isAnimationEnabled ? 'step-animation' : ''}`;

  const [t, i18n] = useTranslation("global");
  return (
    <div className="container-services">
      <img src={triangulo} class="triangulo" />
      <h3>We Keep great ideas alive!</h3>
      <div className="services">
        <a> ——— SERVICIOS ———</a>
        <h1>Nos mostramos como una empresa abierta a las criticas y al cambio constructivo trabajando de la mano con nuestros socios comerciales</h1>
      </div>

      <figure class="icon-cards mt-7">
        <div class="icon-cards__content">
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/UxUi">
              <div className="shadow"><span>UX-UI</span></div>
              <img className="img-carrusel" src={uxui} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/ERP">
              <div className="shadow"><span>ERP Services</span></div>
              <img className="img-carrusel" src={erp} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/Power-Apps">
            <div className="shadow"><span>Power Apps</span></div>
            <img className="img-carrusel" src={power} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/DataScientist">
            <div className="shadow"><span>Data Scientist</span></div>
            <img className="img-carrusel" src={data} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/Head-Hunter">
              <div className="shadow"><span>Head Hunter</span></div>
              <img className="img-carrusel-hunter" src={hunter} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">\
            <a href="/Desarrollo-software">
              <div className="shadow"><span>Desarrollo de Software</span></div>
              <img className="img-carrusel" src={desarrollo} />
            </a>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <a href="/Project-Management">
              <div className="shadow"><span>Project Management</span></div>
              <img className="img-carrusel" src={project} />
            </a>
          </div>
        </div>
      </figure>



      <h2> Nos especializamos en adaptar y personalizar sistemas para satisfacer las necesidades específicas de su negocio. Esto implica la creación de soluciones a medida y trabajamos de la mano con sus equipos de IT en todo el proceso, desde la definición técnica hasta el respaldo en las pruebas y la transición exitosa hacia la producción.
      </h2>

      {/* /////////////////////////////////CLIENTES/////////////////////// */}
      <div className="clientes">
        <a> ——— CLIENTES ———</a>
        <div className="seccion-clientes">
          <img className="img-clientes" src={clientes} />
          <span className="text-clientes">Adoptamos sus políticas internas y contribuimos paralelamente en sus programas sociales para crear
            una identidad compartida y congruente. Participamos en todas las actividades sociales y culturales
            que promuevan.</span>
          <Carrusel />
        </div>
      </div>

    </div>

  );
};

export default Service;
