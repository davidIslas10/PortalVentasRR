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
import "../CSS/acercade.css"

export const Acercade = () => {
    return (
        <div className='container-acercade'>
            <Navbar />
            <div>
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
                <div className='mision'>
                    <div className='mision-header'>
                        <span>Misión</span>
                    </div>
                    <div className='mision-body'>
                        <span>
                            Nos proponemos llegar ser una empresa líder en consultoría en
                            Tecnología e Información. Brindando soluciones tecnológicas integrales a
                            todo nivel empresarial, innovando constantemente nuestros productos y
                            servicios, de tal modo que tomamos los retos de negocio como si fueran
                            propios, para maximizar la utilidad y reducir costos.
                        </span>
                    </div>
                </div>
                <div className='vision'>
                    <div className='vision-header'>
                        <span>Visión</span>
                    </div>
                    <div className='vision-body'>
                        <span>
                            Desarrollar soluciones tecnológicas empresariales que generen valor a los
                            procesos de negocios con personal altamente calificado y comprometidos
                            con el bienestar de la sociedad.
                        </span>
                    </div>
                </div>
            </div>
            <div className='Fortalezas'>
                <a> ——— FORTALEZAS ———</a>
                <div className='expertos-tecnologias'>
                    <img src={expertos} class="expertos" />
                    <div className='text-tecnologias'>
                        <h3>Conocimiento del negocio</h3>
                        <span>Nuestros consultores han trabajado del lado del negocio conociendo los procesos financieros de una empresa</span>
                        <h3>Conocimiento Fiscal</h3>
                        <span>Somos expertos en la localización fiscal de los principales países de Latinoamerica: Colombia, Perú, Chile, Brasil, Argentina</span>
                        <h3>Expertos en sistemas ERPs</h3>
                        <span>Consultores expertos certificados en los principales sistemas ERPs del mercado SAP, OREACLE, JD EDWARDS, hemos trabajado en el proceso de levantamiento de información, moldeado, implementación de mejores prácticas, rediseño de procesos en todos los módulos</span>
                        <h3>Expertos en tecnologias y proyectos</h3>
                        <span>Experiencia en el desarrollo de software, certificaciones en diferentes metodologías y lenguajes de programación. Project Manager con certificaciones y conocimiento de metodologías de gestión de proyectos y marcos de agilidad</span>
                    </div>

                </div>
                <span>Nuestra oferta parte siempre de dos variables importantes:</span>
                <div className='ofertas'>
                    <div className='oferta1'>
                        <h1>Análisis y conocimiento de sus procesos recomendando mejores
                            prácticas o diseñando herramientas a su medida.
                        </h1>
                    </div>
                    <div className='oferta2'>
                        <h1>Capacitación de su equipo de trabajo para entender el proceso y
                            su interacción con el sistema.
                        </h1>
                    </div>
                </div>
                <h3>El mejor equipo a su disposición</h3>
            </div>
            <Footer />
        </div>
    )
}
