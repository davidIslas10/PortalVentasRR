import React from 'react'
import powerimg from "../images/img/powerimg.png"
import microsfot from "../images/img/Microsoft_logo.png"
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Erps from "../images/img/Power-Apps.png"
import Erpm from "../images/img/power apps.jpg"
import Navbar from './Navbar'
import Footer from './Footer'
import Carrusel from './Carrusel'
import triangulo from '../images/img/triangulo.png';
import "../CSS/PowerApps.css"
export const PowerApps = () => {
    return (
        <div className='Powerapps'>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={Erpm} class="portadam" />
                        <h3>Power Apps</h3>
                        <p>Aplicaciones personalizadas y soluciones eficientes</p>
                        <h1>
                            Nuestro servicio de Power Apps destaca por nuestra experiencia y
                            conocimiento profundo, la capacidad de personalización y adaptabilidad,
                            la integración y conectividad, la agilidad en el desarrollo y el soporte al
                            cliente. Estas características hacen que nuestro servicio sea único y valioso
                            para nuestros clientes, permitiéndoles optimizar sus procesos, mejorar la
                            eficiencia y alcanzar sus objetivos comerciales.

                        </h1>
                        <span>Resolver problemas y satisfacer necesides</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={Erps} class="portada" />

                </div>
            </div>
            <div className="triangulo-banner">
                <img src={triangulo} class="triangulo" />
            </div>
            <div className='body-desarrollo'>
                <div className='Ds-1'>
                    <img src={uno} class="img-ds" />
                    <span>Nos enfocamos en el diseño centrado en el usuario, asegurándonos de que las aplicaciones sean fáciles de usar y cumplan con los objetivos comerciales del cliente.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Ayudamos a nuestros clientes a integrar sus aplicaciones de Power Apps con otros sistemas y servicios que utilizan en su empresa. Esto incluye integraciones con bases de datos, sistemas de gestión de contenido, servicios en la nube, APIs y más</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Atendemos a diversas áreas en el desarrollo de aplicaciones en Power Apps, como la gestión de datos, seguimiento de proyectos, gestión de inventario, gestión de recursos humanos, informes y paneles de control, entre otros.</span>
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
