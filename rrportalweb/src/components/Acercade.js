import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import portada from '../images/img/portada.png';
import triangulo from '../images/img/triangulo.png';
import logo from '../images/img/logorr.svg';
import portadam from '../images/img/portada-m.png';
import valorimg from '../images/img/valor-img.PNG';
import valorimgm from '../images/img/valor-img-m.PNG';
import expertos from '../images/img/expertos.PNG';
import acercade from '../images/img/acercade.png';
import Nav from 'react-bootstrap/Nav';
import "../CSS/acercade.css"

import { Chatbot } from './Chatbot';

export const Acercade = () => {
    return (
        <div className='container-acercade'>
            <Navbar />
            <div>
                <Chatbot />
                <div className="container-banners">
                    <div class="carousel-caption">
                        <div className="text-portada">
                            <h3>Quienes Somos</h3>
                            <p>Proporcionamos el diseño de TI más responsivo y
                                funcional para empresas y negocios a nivel mundial.
                            </p>
                            <h1>Capitalizamos el conocimiento de muchos años de experiencia en la
                                administración de empresas y participación en la implementación de proyectos,
                                que nos dan la oportunidad de aportar valor importante en nuestros clientes, que
                                se traducen en procesos de trabajo óptimos, incremento en la eficiencia y la
                                contribución de mayor rentabilidad para las organizaciones</h1>
                        </div>
                    </div>
                    <div className="portada">
                        <img src={portadam} class="portadam" />
                        <img src={acercade} class="portada" />
                    </div>
                </div>


            </div>

            <div className='container-mision-vision'>
                <div className="triangulo-banner">
                    <img src={triangulo} class="triangulo" />
                </div>
                <span className='valores'>Valores</span>
                <img src={valorimg} class="valorimg" />
                <img src={valorimgm} class="valorimgm" />
            </div>
            <div className='mision-vision'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Misión</p>
                            <p>Hover Me</p>
                        </div>
                        <div class="flip-card-back">
                            <p>  Nos proponemos llegar ser una empresa líder en consultoría en
                                Tecnología e Información. Brindando soluciones tecnológicas integrales a
                                todo nivel empresarial, innovando constantemente nuestros productos y
                                servicios, de tal modo que tomamos los retos de negocio como si fueran
                                propios, para maximizar la utilidad y reducir costos.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Visión</p>
                            <p>Hover Me</p>
                        </div>
                        <div class="flip-card-back">
                            <p>  Desarrollar soluciones tecnológicas empresariales que generen valor a los
                                procesos de negocios con personal altamente calificado y comprometidos
                                con el bienestar de la sociedad.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='Fortalezas'>
                <span> ——— FORTALEZAS ———</span>
                <dl>
                    <dt id="dd-1">
                        <a href="#dd-1">Conocimiento del negocio</a>
                    </dt>
                    <dd>
                        <p>Nuestros consultores han trabajado del lado del negocio conociendo los procesos financieros de una empresa</p>
                    </dd>
                    <dt id="dd-2">
                        <a href="#dd-2">Conocimiento Fiscal</a>
                    </dt>
                    <dd>
                        <p>Somos expertos en la localización fiscal de los principales países de Latinoamerica: Colombia, Perú, Chile, Brasil, Argentina</p>
                    </dd>
                    <dt id="dd-3">
                        <a href="#dd-3">Expertos en sistemas ERPs</a>
                    </dt>
                    <dd>
                        <span>Consultores expertos certificados en los principales sistemas ERPs del mercado SAP, OREACLE, JD EDWARDS, hemos trabajado en el proceso de levantamiento de información, moldeado, implementación de mejores prácticas, rediseño de procesos en todos los módulos</span>
                    </dd>
                    <dt id="dd-4">
                        <a href="#dd-4">Expertos en tecnologias y proyectos</a>
                    </dt>
                    <dd>
                        <p>Experiencia en el desarrollo de software, certificaciones en diferentes metodologías y lenguajes de programación. Project Manager con certificaciones y conocimiento de metodologías de gestión de proyectos y marcos de agilidad</p>
                    </dd>
                </dl>

                <h3 className='nomobile'>El mejor equipo a su disposición</h3>
            </div>
            <Footer />
        </div>
    )
}
