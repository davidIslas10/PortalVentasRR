import React, { Children } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      [
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
    

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
