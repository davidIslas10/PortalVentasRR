import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import desarrollo from "../images/img/Desarrollo_sofware.png"
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import triangulo from '../images/img/triangulo.png';
import desarrollo_m from "../images/img/desarrollo software.jpg"
import "../CSS/software.css"
import Carrusel from './Carrusel'
export const Desarrollosoftware = () => {
    return (
        <div className='desarrollo-sofware'>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={desarrollo_m} class="portadam" />
                        <h3>Desarrollo de software</h3>
                        <p>Diseño, Planeación, Documentación, Pruebas y
                            arreglo de código con el fin de crear una o
                            más aplicaciones.
                        </p>
                        <h1>
                            <ul>
                                <li>Soluciones personalizadas</li>
                                <li>Funcionalidad y rendimiento mejorados</li>
                                <li>Experiencia de usuario mejorada</li>
                                <li>Mayor escalabilidad y flexibilidad</li>
                                <li>Reducción de costos y eficiencia operativa</li>
                            </ul>
                        </h1>
                        <span>Utilizamos las mejores metodologías con diferentes lenguajes
                            de programación</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={desarrollo} class="portada" />

                </div>
            </div>
            <div className="triangulo-banner">
                <img src={triangulo} class="triangulo" />
            </div>
            <div className='body-desarrollo'>
                <div className='Ds-1'>
                    <img src={uno} class="img-ds" />
                    <span>Contamos con un equipo de desarrollo altamente experimentado y con amplios conocimientos. Ofrecemos soluciones innovadoras, eficientes y de calidad que cumplan con los requisitos y expectativas del cliente.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Servicio de desarrollo de software único que se adapta a los requisitos del cliente y proporcionará soluciones a medida que se ajusten a sus necesidades particulares.</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Nos aseguramos de seguir buenas prácticas de desarrollo, utilizar metodologías y estándares reconocidos y realizar pruebas exhaustivas para entregar un producto final confiable y de calidad.</span>
                </div>
            </div>
            <div className='software'>
                <Carrusel />
            </div>

            <div className='contactanos'>
                <span>100% de <strong>nuestros clientes</strong> se quedan con nosotros
                    después del primer proyecto</span>
                <button ><a href="https://wa.me/5525386986">¡Contáctanos Ahora!</a></button>

            </div>

            <Footer />
        </div>
    )
}
