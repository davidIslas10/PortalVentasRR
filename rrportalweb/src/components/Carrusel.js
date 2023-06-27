import React from "react";
import web from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import Comments from "../images/Comments.png";
import date1 from "../images/Calendario 18 July.svg";
import date2 from "../images/Calendario 25 July.svg";
import blog3 from "../images/blog3.png";
import "../style.css";
import "../index.css";

const Carrusel = () => {
  return (
    <div>
      <section className="content-pictures">
        <div className="blog-web">
          <div className="Web">
            <div className="W-hover">
              <img src={web} class="blog-image" />
              <img src={date1} class="date1" />
              <div className="banners">
                <div className="image">
                  <img src={Comments} class="Comments" />
                </div>
                <br></br>
                <div className="text">
                  <div className="blog1">
                    <span>
                      Tim Berners is considered the "Father of the Web"
                    </span>
                  </div>
                  <div className="blog-web11">
                    <span>
                      Since in 1989 he created the World Wide Web, better known
                      as "www" with which the first web page could be encoded on
                      August 6, 1991.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-email">
          <div className="blog2">
            <div className="W-hover">
              <img src={blog2} class="blog-image" />
              <img src={date2} class="date1" />
              <div className="banners">
                <div className="image">
                  <img src={Comments} class="Comments" />
                </div>
                <br></br>
                <div className="text2">
                  <div className="blog-web">
                    <span>E-mails</span>
                  </div>
                  <div className="blog-web1">
                    <span>
                      About 200 million emails are sent every day, but 70% of
                      them are spam.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-mobil">
          <div className="Web3">
            <div className="W-hover">
              <img src={blog3} class="logo" />
              <img src={date1} class="date1" />
              <div className="banners">
                <div className="image">
                  <img src={Comments} class="Comments" />
                </div>
                <br></br>
                <div className="text3">
                  <div className="blog-web">
                    <span>Busquedas en Google </span>
                  </div>
                  <div className="blog-web1">
                    <span>
                      Only 16% of daily searches on Google are original and have
                      not been done before.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrusel;
