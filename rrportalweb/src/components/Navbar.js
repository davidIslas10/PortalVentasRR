import React, { useState } from "react";
import "../style.css";
import "../index.css";
import Logo from "../images/Logo.png";
import { HeaderWrapper } from "./Header";
import Navresp from "./navresp";
import MenuButton from "./MenuButton";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const[t, i18n] = useTranslation("global");

  return (
    <div>
      <nav class="navbar" style={{ backgroundColor: "#223E69" }}>
        <div class="container">
          <div className="navbar-left">
            <a href="#" class="icon icon-correo-electronico" />
            <a href="#" class="icon icon-telefono" />
            <div class="text-translate">
              <a onClick={() => i18n.changeLanguage("es")}>ESP</a>
              <span >|</span>
              <a onClick={() => i18n.changeLanguage("en")}>ING</a>
            </div>
          </div>

          <div className="navbar-right">
            <a href="" class="icon icon-instagram" />
            <a href="" class="icon icon-linkedin" />
            <a href="" class="icon icon-whatsapp" />
          </div>
        </div>

        <div class="responsive">
          <div class="logo-responsive">
            <img src={Logo} class="logo" />
          </div>

          <div class="translate-responsive">
            <a href="#">ESP</a>
            <span>|</span>
            <a href="#">ING</a>
          </div>
        </div>

        <HeaderWrapper>
          <Navresp open={open} />
          <MenuButton open={open} handleClick={handleClick} />
        </HeaderWrapper>

      </nav>
    </div>
  );
};

export default Navbar;
