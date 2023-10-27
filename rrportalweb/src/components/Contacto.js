
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar'
import Footer from './Footer'
import Carrusel from './Carrusel';
import "../CSS/contact.css"
import triangulo from '../images/img/triangulo.png';
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";

export const Contacto = () => {


    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };
    return (
        <div className='Contacto'>
            <Navbar />
            <div className='contacto-carrusel'>
                <Carrusel />
            </div>
            <div className='contacto-triangulo'>
                <img src={triangulo} class="triangulo" />
            </div>
            <div className='text-Contacto'>
                <span>100% de <strong>nuestros clientes</strong> se quedan con nosotros después del primer proyecto</span>
                <div className="down">
                    <a href="tel:+525525386986"><FaPhone />+52 (55) 2538 6986</a>
                    <a href="mailto:admin@itconsultingrr.com"><FiMail /> admin@itconsultingrr.com</a>
                </div>
            </div>
            <div className='contact'>
                <Form>
                    <fieldset disabled>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Quiero informacion del siguiente servicio: </Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="" />
                        </Form.Group>
                        <div className='mb-3-flex'>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Nombre: </Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="" />
                                <Form.Label htmlFor="disabledTextInput">Email: </Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">Apellido: </Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="" />
                                <Form.Label htmlFor="disabledTextInput">Empresa: </Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Pais</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Mexico</option>
                                <option>Colombia</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Acepto terminos"
                            />
                        </Form.Group>

                        <div className='recaptcha'>

                            <ReCAPTCHA
                            token="TOKEN"
                            expectedAction= "USER_ACTION"
                            sitekey="6LeZq8koAAAAAE_8I0iFBQBtNYU0IRNeX6itGqGg" // Reemplaza con tu clave de sitio web
                            onChange={handleRecaptchaChange}
                        />

                         


                        </div>

                        <Button variant="danger">Enviar</Button>{' '}

                        {recaptchaValue && (
                            <p>ReCAPTCHA Value: {recaptchaValue}</p>
                        )}



                    </fieldset>
                </Form>
            </div>
            <Footer />
        </div>
    )
}
