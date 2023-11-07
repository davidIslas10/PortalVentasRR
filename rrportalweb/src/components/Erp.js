import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Erps from "../images/img/Erp_D.png"
import Erpm from "../images/img/erp.jpg"
import Carrusel from './Carrusel'
import "../CSS/software.css"


export const Erp = () => {
    return (
        <div>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={Erpm} class="portadam" />
                        <h3>ERP Services</h3>
                        <p>IMPLEMENTACIÓN DE SOFTWARE Y DESARROLLO DE PROYECTOS</p>
                        <h1>
                            Asignación de consultores altamente capacitados en los principales ERP a
                            nivel mundial SAP, ORACLE, JD EDWARS. Nuestros servicios de gestión de
                            aplicaciones incluyen el desarrollo, la implementación, la integración, las
                            pruebas, el mantenimiento y el soporte (funcional y técnico), la
                            supervisión, las copias de seguridad, además de servicios de recuperación
                            y de atención al cliente.
                        </h1>
                        <span>Utilizamos las mejores metodologías actuales</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={Erps} class="portada" />

                </div>
            </div>
            <div className='body-desarrollo'>
                <div className='Ds-1'>
                    <img src={uno} class="img-ds" />
                    <span>Ofrecemos una metodología sólidamente fundamentada en las mejores prácticas, diseñada para optimizar los procesos y lograr resultados que se ajusten de manera precisa a las necesidades de su empresa</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Brindamos un apoyo integral que incluye acompañamiento y capacitación tanto antes como después de la implementación del sistema, con un enfoque funcional que garantiza un entendimiento profundo de la tecnología</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>ofrecemos soporte para la atención de incidencias diarias, la resolución de problemas de primer y segundo nivel, así como la solución de problemas críticos y el desarrollo de proyectos personalizados</span>
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
