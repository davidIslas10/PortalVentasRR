import React from "react";
import "../style.css";
import "../index.css";
import separation from "../images/separation-red.png";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from "./Carrusel";
import Logos from "./Logos";
import Footer from "./Footer";
import Personage from "./Personage";

const Blog = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <blog>
      <div className="background">
        <div className="separations">
          <img src={separation} class="logo" />
        </div>
        <div className="blog-red">
          <span>BLOG</span>
        </div>
        <div className="blog-blue1">
          <span>Latest News</span>
        </div>
        <div className="blog-blue2">
          <span>
            We tell you some curious facts about the internet that you may not
            have known.
          </span>
        </div>
        <Carrusel />
      </div>
      <Logos/>
      <Personage/>
      
    </blog>
  );
};

export default Blog;
