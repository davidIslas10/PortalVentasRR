import React from "react";
import { useTranslation } from "react-i18next";
import home3 from "../images/Imagen Home 3.png";
import separation_vector from "../images/separacion-vector.png";

const Personage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="home3">
        <div className="red_home3">
          <div className="great">
            <span>{t("Blog.great")}</span>
          </div>
          <div className="person">
            <img src={home3} class="personaje" />
          </div>
          <img src={separation_vector} class="vector_separacion" />

          <div className="buttton-center">
            <div className="button">
              <span>{t("Blog.together")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personage;
