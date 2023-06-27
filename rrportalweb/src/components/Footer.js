import React from "react";
import logo from "../images/R&R Fondo Blanco.svg";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="home3">


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
    </div>
  );
};

export default Footer;
