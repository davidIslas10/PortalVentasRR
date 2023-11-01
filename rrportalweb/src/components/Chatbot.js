import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import img_bot from "../images/img/botAvatar.png";
import img_avatar from "../images/img/avatar.png";
import img_header from "../images/img/chat-header.png";
import '../CSS/chatbot.css'

export const Chatbot = () => {

  const theme = {
    background: '#F4F5F7',
    headerBgColor: '#556580',
    headerHeight: '300px!important',
    headerFontColor: '#fff',
    headerFontSize: '60px',
    botBubbleColor: '#8C99B0',
    botFontColor: '#fff',
    userBubbleColor: '#A8A8A7',
    avatarStyle: 'none',
    userBubble: {

      masxWidth: "67%",

    }
    ,
    userFontColor: '#fff',

  }


  return (
    <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle={
              <img className="encabezado" src={img_header} />
            }
            botAvatar={img_bot}
            userAvatar={img_avatar}
            floating={true}
            steps={[
              {
                id: '1',
                message: 'Cual es tu nombre ?',
                trigger: 'nombre',
              },
              {
                id: 'nombre',
                user: true,
                validator: (value) => {
                  const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
                  if (/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/.test(value)) {
                      return true;
                  }
                  else {
                      return 'Ingresa un nombre valido';
                  }
              },
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hola {previousValue}, ¿Cúal es tu número de celular?',
                trigger: 'telefono',
              },
              {
                id: 'telefono',
                user: true,
                validator: (value) => {

                  if (/[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/i.test(value)) {
                      
                      return true;
                  }
                  else {
                      return 'Ingresa un celular valido';
                  }
              },
                trigger: '4',
              },
              {
                id: '4',
                message: '¿Cúal es tu Correo?',
                trigger: 'correo',
              },
              {
                id: 'correo',
                user: true,
                validator: (value) => {
                  if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(value)) {
                      return true;
                  }
                  else {
                      return 'Ingresa un correo valido';
                  }
              },
                trigger: '5',
              },
              {
                id: '5',
                message: '¿Cual es tu empresa?',
                trigger: 'empresa',
              },
              {
                id: 'empresa',
                user: true,
                trigger: '6',
              },
              {
                id: '6',
                message: '¿Que servicio te interesa?',
                trigger: 'servicio',
              },
              {
                id: 'servicio',
                options: [
                  { value: 1, label: 'Desarrollo de software', trigger: '7' },
                  { value: 2, label: 'Data Science', trigger: '7' },
                  { value: 3, label: 'ERP Service', trigger: '7' },
                  { value: 4, label: 'Project Management', trigger: '7' },
                  { value: 5, label: 'Power Apps', trigger: '7' },
                  { value: 6, label: 'Head Hunter', trigger: '7' },
                  { value: 7, label: 'UX/UI', trigger: '7' },
                ],
              },
              {
                id: '7',
                message: 'Comunicate al whatsapp: 5525386986',
                end: true,
              },
            ]}
          />
        </ThemeProvider> 
    </div>

  )
}
