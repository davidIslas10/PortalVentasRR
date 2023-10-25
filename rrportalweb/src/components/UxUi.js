import React from 'react'
import powerimg from "../images/img/powerimg.png"
import microsfot from "../images/img/Microsoft_logo.png"
import uno from "../images/img/1.png"
import dos from "../images/img/2.png"
import tres from "../images/img/3.png"
import Erps from "../images/img/UxUiP.png"
import Erpm from "../images/img/ux-ui.jpg"
import Navbar from './Navbar'
import Footer from './Footer'
import Carrusel from './Carrusel'

export const UxUi = () => {
    return (
        <div>
            <Navbar />
            <div className="container-desarrollo">
                <div class="banner-desarrollo">
                    <div className="banner-text">
                        <img src={Erpm} class="portadam" />
                        <h3>UX/UI</h3>
                        <p>EXPERIENCIA DE USUARIO / INTERFAZ DE USUARIO</p>
                        <h1>
                            Al utilizar nuestros servicios de Diseño UX/UI, los clientes pueden esperar resultados
                            que incluyen una mejora de la experiencia del usuario, aumento de la satisfacción del
                            usuario, mejora de la eficiencia y productividad, reducción de errores y retrabajos,
                            aumento de la retención de usuarios y cumplimiento de objetivos empresariales.
                            Nuestro objetivo es ayudar a nuestros clientes a crear interfaces digitales efectivas
                            que brinden una experiencia excepcional a los usuarios y generen resultados
                            positivos para sus negocios.
                        </h1>
                        <span>Promover una visión más positiva de las marcas,
                            productos y servicios</span>
                    </div>
                </div>
                <div className="portada">
                    <img src={Erps} class="portada" />

                </div>
            </div>
            <div className='body-desarrollo'>
                <div className='Ds-1'>
                    <img src={uno} class="img-ds" />
                    <span>Desarrollamos prototipos interactivos de alta fidelidad que permiten a los usuarios experimentar y evaluar la funcionalidad y la navegación de las interfaces. Estos prototipos se pueden probar con usuarios reales para recopilar comentarios valiosos antes de proceder con el desarrollo completo.</span>
                </div>
                <div className='Ds-1'>
                    <img src={dos} class="img-ds" />
                    <span>Creamos una estructura lógica y coherente para las interfaces digitales, organizando la información de manera clara y accesible. Esto implica la creación de mapas de sitio, diagramas de flujo y jerarquías visuales para garantizar que los usuarios puedan encontrar fácilmente la información que están buscando.</span>
                </div>
                <div className='Ds-1'>
                    <img src={tres} class="img-ds" />
                    <span>Realizamos pruebas con usuarios para evaluar la facilidad de uso, la eficiencia y la satisfacción general de las interfaces. Estas pruebas nos ayudan a identificar áreas de mejora y optimizar la experiencia del usuario.</span>
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
