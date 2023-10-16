import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import data_portada from "../images/img/DataS.png"
import desarrollo from "../images/img/Desarrollo_sofware.png"
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import desarrollo_m from "../images/img/desarrollo software.jpg"
import Carrusel from './Carrusel'

export const DataScientist = () => {
    return (
        <div>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={desarrollo_m} class="portadam" />
                        <h3>Data Scientist</h3>
                        <p>ANÁLISIS Y GESTIÓN DE DATOS</p>
                        <h1>
                            Nuestro servicio de ciencia de datos se destaca por nuestra experiencia,
                            enfoque personalizado, análisis profundo, visualización efectiva,
                            innovación constante y énfasis en la ética y la privacidad. Estas
                            características nos permiten ofrecer soluciones de ciencia de datos de alto
                            valor a nuestros clientes, ayudándolos a extraer conocimientos
                            significativos de sus datos y tomar decisiones estratégicas basadas en
                            datos sólidos.
                        </h1>
                        <span>Utilizamos las mejores metodologías con diferentes lenguajes
                            de programación</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={data_portada} class="portada" />

                </div>
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

            <Carrusel />

            <div className='contactanos'>
                <span>100% de <strong>nuestros clientes</strong> se quedan con nosotros
                    después del primer proyecto</span>
                <button ><a href="https://wa.me/5525386986">Contáctanos Ahora!</a></button>

            </div>
            <Footer />
        </div>
    )
}
