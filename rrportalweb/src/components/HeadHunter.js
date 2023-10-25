import React from 'react'
import powerimg from "../images/img/powerimg.png"
import microsfot from "../images/img/Microsoft_logo.png"
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Erps from "../images/img/Head_hunter.png"
import Erpm from "../images/img/head hunter.jpg"
import Navbar from './Navbar'
import Footer from './Footer'
import Carrusel from './Carrusel'

export const HeadHunter = () => {
    return (
        <div>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={Erpm} class="portadam" />
                        <h3>Head Hunter</h3>
                        <p>TOMAMOS EN CUENTA LA FORMACIÓN QUE POSEEN
                            LOS CANDIDATOS COMO EL VALOR QUE PODRÍAN
                            APORTAR A LA ORGANIZACIÓN</p>
                        <h1>
                            Nos distinguimos por nuestra amplia base de datos de talentos,
                            herramientas de búsqueda avanzadas, evaluaciones de habilidades,
                            experiencia sectorial, servicios de consultoría y presencia internacional.
                            Estas características hacen que nuestro servicio sea único y valioso para
                            nuestros clientes.
                        </h1>
                        <span>Reclutamiento y selección ad hoc para tu organización</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={Erps} class="portada" />

                </div>
            </div>
            <div className='body-desarrollo'>
                <div className='Ds-1'>
                    <img src={uno} class="img-ds" />
                    <span>La eficiencia en la contratación es uno de nuestros sellos distintivos, lo que garantiza que encontrará a los candidatos adecuados en menos tiempo.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>La calidad de las contrataciones es una de nuestras prioridades fundamentales. Nuestra experiencia en la identificación y búsqueda de talento, así como en la evaluación de candidatos, nos permite asegurar que cada contratación sea una adición valiosa a su equipo.</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Nuestra red de conexiones clave y contactos exclusivos nos permite identificar líderes y profesionales de alto nivel que impulsarán su empresa hacia el éxito.</span>
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
