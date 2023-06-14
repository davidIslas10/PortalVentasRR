import React from "react";
import "../style.css";
import "../index.css";
import separation from "../images/separation-red.png";
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
import logo from "../images/R&R Fondo Blanco.svg";
import teva from "../images/Teva.svg";
import logosiguiente from "../images/logo.svg";
import home3 from "../images/Imagen Home 3.png";
import separation_vector from "../images/separacion-vector.png";
import separation_vector2 from "../images/separacion-vector.png";
import flecha from "../images/flecha-footer.png";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <blog>
      <div className="separations">
        <img src={separation} class="logo" />
      </div>
      <div className="blog-red">
        <span>BLOG</span>
      </div>

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

        <footer>
          <Navbar bg={{ backgroundColor: "#223E69" }} variant="dark">
            <div className="fotter-blue">
              <img src={logo} class="logor" />
            </div>
            <Container className="justify-content-center">
              <Nav className="justify-content-center">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Service">Service</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Careers">Careers</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav>
            </Container>

            <div className="footer-right">
              <a href="" class="icon icon-instagram" />
              <a href="" class="icon icon-linkedin" />
              <a href="" class="icon icon-whatsapp" />
            </div>
          </Navbar>
        </footer>
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
