import React, { Children,useState } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Acercade } from "./components/Acercade";
import { Desarrollosoftware } from "./components/Desarrollosoftware";
import { DataScientist } from "./components/DataScientist";


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
      path: "/service/:serviceid",
      element: <Services/>,
      
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
