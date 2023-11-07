import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Carrusel from './Carrusel'
import data_portada from "../images/img/DataS.png"
import desarrollo_m from "../images/img/data_cientist.jpg"

export const DataScientist = () => {
    return (
        <div>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={desarrollo_m} class="portadam" />
                        <h3>Data Science</h3>
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
                    <span>Identificación de relaciones, patrones y anomalías que pueden ser utilizados para mejorar la toma de decisiones y la comprensión del negocio.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Técnicas de aprendizaje automático y modelado estadístico para crear modelos predictivos que permitan predecir comportamientos futuros o resultados basados en datos históricos.</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Optimizar procesos, recursos y tomar decisiones más eficientes. Esto implica el uso de algoritmos y técnicas avanzadas para encontrar la mejor solución posible dado un conjunto de restricciones y objetivos.</span>
                </div>
            </div>

            <div className='software'>
                <Carrusel />
            </div>

            <div className='contactanos'>
                <span>100% de <strong>nuestros clientes</strong> se quedan con nosotros
                    después del primer proyecto</span>
                <button ><a href="https://wa.me/5525386986">Contáctanos Ahora!</a></button>

            </div>
            <Footer />
        </div>
    )
}
