import React from "react";
import { NavbarWrapper } from "./navbarStyles";
import LogoMobile from "../images/Logo.png";

function navresp({ open }) {
  return (
    <NavbarWrapper open={open}>
      <div className="position">
        <a href="#">Home</a>

        <a href="#">Service</a>

        <a href="#">About Us</a>

        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
      <img src={LogoMobile} class="logomobile" />
      <div className="whatsapp">
        <a href="" class="icon icon-whatsapp" />
      </div>
      

    </NavbarWrapper>
  );
}

export default navresp;
