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
    textblue1: "services.sap.analitic",
    textblue2: "services.sap.processes",
    textBullets: [
      `services.sap.according`,
      `services.sap.certification`,
      `services.sap.training`,
      `services.sap.Consulting`,
      "services.sap.Remediation",
    ],
    imgNube: N_Sap,
    flecha: flecha_item,
  },
  {
    id: "1",
    urlImage: B_powerapps,
    textRed1: "PowerApps Development",
    textRed2: "PowerApps Development",
    textblue1: "services.apps.businesses",
    textblue2: "services.apps.complex",
    textBullets: [
      `services.apps.Platform`,
      `services.apps.Integration`,
      `services.apps.Deployment`,
      `services.apps.Adoption`,
    ],
    flecha: flecha_item,
    imgNube: N_power,
  },
  {
    id: "2",
    urlImage: B_UI,
    textRed1: "UX/UI Design",
    textRed2: "UX/UI Design",
    textblue1:"services.ui.entire",
    textblue2: "",
    textBullets: [
      `services.ui.lead`,
      `services.ui.design`,
      `services.ui.our`,
    ],
    imgNube: N_UI,
  },
  {
    id: "3",
    urlImage: B_Data,
    textRed1: "Data & Analytics",
    textRed2: "Data & Analytics",
    textblue1: "services.data.unlock",
    textblue2: "services.data.driven",
    textBullets: [
      `services.data.service`,
      `services.data.design`,
      `services.data.analytic`,
      `services.data.prepare`,
    ],
    imgNube: N_Data,
    flecha: flecha_item,
  },
  {
    id: "4",
    urlImage: B_Soft,
    textRed1: "Developing custom software",
    textRed2: "Software development ",
    textblue1: "services.soft.develop",
    textblue2: "services.soft.startups",
    textRed2: "Software development",
    textRed3: "(Web & Mobile)",
    textBullets: [
      `services.soft.mobile`,
      `services.soft.custom`,
      `services.soft.support`,
      `services.soft.agile`,
    ],
    imgNube: N_Soft,
    flecha: flecha_item,
  },
  {
    id: "5",
    urlImage: B_Manngment,
    textRed1: "Project Managment",
    textRed2: "Project Managment ",
    textRed3: "(PMI/SCRUM-PMI)",
    textblue1: "services.project.automate",
    textblue2: "services.project.complex",
    textRed2: "PowerApps Development",
    textBullets: [
      `services.project.direction`,
      `services.project.certification`,
      `services.project.pmi`,
      `services.project.scrum`,
    ],
    imgNube: N_Manngment,
    flecha: flecha_item,
  },
];

export function getService(id) {
  console.log("id", id);
  return items[id];
}
