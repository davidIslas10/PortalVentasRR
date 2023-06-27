import React from "react";
import diageo from "../images/Diageo.svg";
import totalplay from "../images/total-play.svg";
import grupoSalinas from "../images/Logotipo_de_Grupo_Salinas.svg";
import fuller from "../images/FULLER.svg";
import lenovo from "../images/lenovo-2.svg";
import kidzania from "../images/KidZania_logo.svg";
import colombina from "../images/colombina.svg";
import baker from "../images/Baker_Tilly_International_Logo.svg";
import Rimsa from "../images/Rimsa.svg";
import iws from "../images/IWS.svg";
import teva from "../images/Teva.svg";
import logosiguiente from "../images/logo.svg";

const Logos = () => {
  return (
    <div>
      <div className="logos_clientes">
        <img src={diageo} class="diageo" />
        <img src={totalplay} class="totalplay" />
        <img src={grupoSalinas} class="grupoSalinas" />
        <img src={fuller} class="fuller" />
        <img src={lenovo} class="lenovo" />
        <img src={kidzania} class="kidzania" />
        <img src={colombina} class="colombina" />
        <img src={baker} class="baker" />
        <img src={Rimsa} class="Rimsa" />
        <img src={teva} class="teva" />
        <img src={iws} class="iws" />
        <img src={logosiguiente} class="iws" />
      </div>
    </div>
  );
};

export default Logos;
