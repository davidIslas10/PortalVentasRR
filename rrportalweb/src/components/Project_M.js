import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Erps from "../images/img/Project_M.png"
import Erpm from "../images/img/project-managment.jpg"
import Carrusel from './Carrusel'
import triangulo from '../images/img/triangulo.png';
import "../CSS/ProjectM.css"

export const Project_M = () => {
    return (
        <div className='projectM'>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={Erpm} class="portadam" />
                        <h3>Project Managment</h3>
                        <p>Acceso y talento altamente clasificado</p>
                        <h1>
                            A través de nuestros servicios de Project Management, ayudamos a los
                            clientes a resolver problemas, satisfacer necesidades y alcanzar objetivos
                            en sus proyectos. Les brindamos control, visibilidad, optimización de
                            recursos y una gestión efectiva de riesgos, todo respaldado por una
                            comunicación clara y una mejora continua. Nuestro objetivo es garantizar
                            el éxito del proyecto y la satisfacción del cliente en cada etapa del proceso.
                        </h1>
                        <span>Confidencialidad y discreción</span>
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
                    <span>Monitoreamos y gestionamos los riesgos durante todo el ciclo de vida del proyecto para minimizar los impactos negativos y maximizar las oportunidades.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Trabajamos en estrecha colaboración con nuestros clientes para comprender sus objetivos y requisitos del proyecto. Luego, desarrollamos un plan detallado que incluye la definición del alcance, la creación de un cronograma, la identificación de recursos necesarios y la asignación de tareas.</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Identificamos y asignamos los recursos adecuados para el proyecto, incluyendo personal, equipos, tecnología y otros recursos necesarios. Optimizamos la utilización de los recursos disponibles para garantizar la eficiencia y la productividad del proyecto.</span>
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
