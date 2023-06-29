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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#Service/0">Service</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Careers</Nav.Link>
                <Nav.Link href="">Contact</Nav.Link>
              </Nav>
            </Container>

            <div className="footer-right">
              <a href="https://www.instagram.com/rrit_consulting/" class="icon icon-instagram" />
              <a href="https://mx.linkedin.com/company/r-r-i-t-consulting" class="icon icon-linkedin" />
              <a href="https://api.whatsapp.com/send/?phone=5215532253411&text=%C2%A1Hola%21+estoy+interesado+en+sus+servicios+&type=phone_number&app_absent=0" class="icon icon-whatsapp" />
            </div>
          </Navbar>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
