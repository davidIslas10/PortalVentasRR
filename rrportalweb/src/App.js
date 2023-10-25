import React, { Children,useState } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Acercade } from "./components/Acercade";
import { Desarrollosoftware } from "./components/Desarrollosoftware";
import { DataScientist } from "./components/DataScientist";
import { Erp } from "./components/Erp";
import { Project_M } from "./components/Project_M";
import { PowerApps } from "./components/PowerApps";
import { HeadHunter } from "./components/HeadHunter";
import { UxUi } from "./components/UxUi";
import { Contacto } from "./components/Contacto";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      [
      <Navbar/>,
      <Banner />,
      <Service />,
      <Blog />,
      <Footer/>
      ]
    ), 

  },
    
    {
      path: "/Acercade",
      element: <Acercade/>,
    },
    {
      path: "/Desarrollo-software",
      element: <Desarrollosoftware/>,
    },
    {
      path: "/DataScientist",
      element: <DataScientist/>,
    },
    {
      path: "/ERP",
      element: <Erp/>,
    },
    {
      path: "/Project-Management",
      element: <Project_M/>,
    },
    {
      path: "/Power-Apps",
      element: <PowerApps/>,
    },
    {
      path: "/Head-Hunter",
      element: <HeadHunter/>,
    },
    {
      path: "/UxUi",
      element: <UxUi/>,
    },
    {
      path: "/Contact",
      element: <Contacto/>,
    },
  ]);

function App() {

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  const headerSmall = scrollTop;
  return (
    <div className={headerSmall > 10 ? 'small App':'big App'} onScroll={handleScroll}>
      <RouterProvider router={router} 
      />
    </div>
  );
}

export default App;
