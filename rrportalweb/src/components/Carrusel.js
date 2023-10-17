import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item"
import totalplay from "../images/img/logo_totalplay.png";
import kidzania from "../images/img/kidzania.png";
import lenovo from "../images/img/logo_lenovo.png"
import agua from "../images/img/agua.png"
import teva from "../images/img/teva.png"
import unal from "../images/img/unal.png"
import univar from "../images/img/univar.png"
import grupo_salinas from "../images/img/grupo_salinas.png"
import "../CSS/carrusel.css"

const Carrusel = () => {
    return (
        <div className='container-logos-carrusel'>
            <Carousel
                itemsToShow={4} // Número de elementos a mostrar en versiones de escritorio
                pagination={false}
                enableAutoPlay={true}
            >
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-diageo" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-totalplay" src={totalplay} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="grupo_salinas" src={grupo_salinas} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-fuller" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={lenovo} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-kidzania" src={kidzania} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-colombina" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-bakertilly" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-rimsa" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-iws" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={agua} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={teva} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={unal} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={univar} />
                    </div>
                </Item>
            </Carousel>
            <Carousel
                itemsToShow={1} // Número de elementos a mostrar en versiones de escritorio
                pagination={false}
                enableAutoPlay={false}
                className='mobile'
            
            >
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-diageo" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-totalplay" src={totalplay} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-totalplay" src={grupo_salinas} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-fuller" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-lenovo" src={lenovo} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <img className="img-kidzania" src={kidzania} />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-colombina" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-bakertilly" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-rimsa" />
                    </div>
                </Item>
                <Item>
                    <div className="item-clientes">
                        <span class="icon icon-iws" />
                    </div>
                </Item>
            </Carousel>

        </div>
    )
}

export default Carrusel