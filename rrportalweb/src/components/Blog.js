import React from "react";
import "../index.css";
import separation from "../images/separation-red.png";
import clientes from "../images/Logos clientes.png";
import home3 from "../images/Imagen Home 3.png";
import separation_vector from "../images/separacion-vector.png";
import separation_vector2 from "../images/separacion-vector.png";

import web from "../images/web.png";

const Blog = () => {
  return (
    <blog>
      <div className="separations">
        <img src={separation} class="logo" />
      </div>
      <div className="blog-red">
        <span>BLOG</span>
      </div>

      <div className="logos_clientes">
        <img src={clientes} class="logo" />
      </div>

      <div className="home3">
        <div className="red_home3">
          <span>Do a great project with us</span>
          <img src={home3} class="personaje" />
          <img src={separation_vector} class="vector_separacion" />
          <img src={separation_vector2} class="vector_separacion2" />

      
          <div className="button">
              <span>Let´s work together!</span>
          </div>
        </div>
      </div>
      {/* 
      Esta es la parte del blog esta en proceso
    <div className="Web">
        <img src={web} class="logo" />
        <div className="blog-web">
          <span>Web</span>
        </div>
        <div className="blog-web1">
          <span>
            El dispositivo principal de acceso a Internet es el teléfono móvil
          </span>
        </div>
        <div className="blog-web2">
          <span>
            En el mundo hay 5.19 billones de usuarios de móvil únicos.
          </span>
        </div>
      </div>
      <div className="Web">
        <img src={web} class="logo" />
        <div className="blog-web">
          <span>Web</span>
        </div>
        <div className="blog-web1">
          <span>
            El dispositivo principal de acceso a Internet es el teléfono móvil
          </span>
        </div>
        <div className="blog-web2">
          <span>
            En el mundo hay 5.19 billones de usuarios de móvil únicos.
          </span>
        </div>
      </div>
      <div className="Web">
        <img src={web} class="logo" />
        <div className="blog-web">
          <span>Web</span>
        </div>
        <div className="blog-web1">
          <span>
            El dispositivo principal de acceso a Internet es el teléfono móvil
          </span>
        </div>
        <div className="blog-web2">
          <span>
            En el mundo hay 5.19 billones de usuarios de móvil únicos.
          </span>
        </div>
      </div>
      <div className="Web">
        <img src={web} class="logo" />
        <div className="blog-web">
          <span>Web</span>
        </div>
        <div className="blog-web1">
          <span>
            El dispositivo principal de acceso a Internet es el teléfono móvil
          </span>
        </div>
        <div className="blog-web2">
          <span>
            En el mundo hay 5.19 billones de usuarios de móvil únicos.
          </span>
        </div>
      </div>
*/}
    </blog>
  );
};

export default Blog;
