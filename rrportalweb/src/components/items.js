import B_sap from "../images/BannerSap.png";
import B_powerapps from "../images/Banner Powerapps.png";
import B_UI from "../images/Banner UI UX.png";
import B_Data from "../images/Banner Data & Analitics.png";
import B_Soft from "../images/B-SOFTWARE DEVELOPMENT.png";
import B_Manngment from "../images/Banner Project Managment.png";
import N_Sap from "../images/Imagen SAP R3 HANA ABAP 1.png";
import N_UI from "../images/Foto UI UX 1.png";
import N_power from "../images/Imagen Powerapps 1.png";
import N_Data from "../images/Imagen Data & analitics.png";
import N_Soft from "../images/Imagen Software Development.png";
import N_Manngment from "../images/Imagen Project Managment.png";
import flecha_item from "../images/flecha-item.png";




export const items = [
  {
    id: "0",
    urlImage: B_sap,
    textRed1: "SAP R3 / HANA Solutions",
    textRed2: "SAP R3 / HANA Solutions",
    textblue1: "Analysis and knowledge of recommended",
    textblue2: "processes, best practices or design tools to suit you.",
    textBullets: [
    "Ad-Hoc developers according to business processes",
      `Certification in standard development methodologies
        COBIC, ETIL`,
      `Training of best practices developed based on learning from 
        the different projects in which we have participated
        `,
      `SAP consulting in the different modules and customizations 
        FICO / MM / SD / WM / PP / QM
        `,
      "Remediación post Implementación SAP",
    ],
    imgNube:N_Sap,
    flecha:flecha_item,
  },
  {
    id: "1",
    urlImage: B_powerapps,
    textRed1: "PowerApps Development",
    textRed2: "PowerApps Development",
    textblue1: "With Power Apps, businesses can automate",
    textblue2: "complex processes and deploy low-code apps.",
    textBullets: [
       `Platform-Wide Modernization Using Data 
          connectors and AI.`,
      ` Integration With Flow, Power BI, Salesforce, or 
          SharePoint Libraries.
          `,
      ` Intranet Deployment With Teams, SharePoint, 
          Power Platform.
          
                `,
      `Adoption of Robust, Secure, and Compliant 
          Low-Code Technologies.
          `,
      "",
    ],
     flecha:flecha_item,
    imgNube:N_power, 
  },
  {
    id: "2",
    urlImage: B_UI,
    textRed1: "UX/UI Design",
    textRed2: "UX/UI Design",
    textblue1:
      "We lead the entire UX/UI designprocess and product definition, from the creation of the prototype to the visual style, incorporating feedback from end users and stakeholders.",
    textblue2: "",
    textBullets: [
      `We lead the entire UX/UI designprocess and product 
              definition, from the creation of the prototype to the visual 
              style, incorporating feedback from end users and 
              stakeholders.
              `,
      `We design and define the messages to be communicated to 
              the user through the content and UX strategy, adapting 
              them to the voice of the brand and the tone of each 
              channel.              
              `,
      `Our designers are trained to work with different 
              frameworks such asDesign Thinking. pyright © 2023 R&R ITCONSULTING`,
      ` `,
      "",
    ],
    imgNube:N_UI, 
  },
  {
    id: "3",
    urlImage: B_Data,
    textRed1: "Data & Analytics",
    textRed2: "Data & Analytics",
    textblue1: "Unlock strategic value in business data and build a",
    textblue2: "data-driven organization to drive business value.",
    textBullets: [
      `Data services`,
      `Strategy and design services`,
      `Analytics Consulting`,
      `Prepare data for intelligent workflows`,
      "",
    ],
    imgNube:N_Data, 
    flecha:flecha_item,

  },
  {
    id: "4",
    urlImage: B_Soft,
    textRed1: "Developing custom software",
    textRed2: "Software development ",
    textblue1: "We develop technology for organizations, agencies",
    textblue2: "and startups around the world.",
    textRed2: "Software development",
    textRed3: "(Web & Mobile)",
    textBullets: [
      `Developers on Web & Mobile platforms. Use technologies 
                  such as NET, Java, ASP, Node JS and frameworks such as 
                  React JS, Angular JS and JS View.
                  `,
      `Custom software developments and/or customer needs`,
      `Application maintenance and support`,
      `Our developers are trained to work with Agile 
                  Metodologhys 
                  `,
      "",
    ],
    imgNube: N_Soft,
    flecha:flecha_item,
  },
  {
    id: "5",
    urlImage: B_Manngment,
    textRed1: "Project Managment",
    textRed2: "Project Managment ",
    textRed3: "(PMI/SCRUM-KANBAN)",
    textblue1: "With Power Apps, businesses can automate",
    textblue2: "complex processes and deploy low-code apps.",
    textRed2: "PowerApps Development",
    textBullets: [
      `Direction, Management and Project Administration                
                  `,
      `Certification in SAP ASAP Methodologies
                  `,
      `Certification in Methodologies PMI`,
      `Certification in SCRUM ORG & SCRUM ALLIANCE 
                  Methodologies                                    
                  `,
      "",
    ],
    imgNube:N_Manngment, 
    flecha:flecha_item,

  },
];

export function getService(id) {
  console.log("id", id);
  return items[id];
}
