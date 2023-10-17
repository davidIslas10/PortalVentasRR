import React from "react";
import {logo} from "../src/images/img/logorr.png"
<link rel="stylesheet" href="../icomoon/style.css"/>
const Navbar = () => {
  return (

      <nav class="navbar navbar-dark" style={{backgroundColor: '#223E69'}}>
        <div class="container">
          <a class="navbar-brand" href="">
          <a class="icon icon-iconsap"></a>
            <img src={"/icons/img.svg"}   width="30" height="24" class="d-inline-block align-text-top"/>
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg"  width="30" height="24" class="d-inline-block align-text-top"/>
            <a> ESP </a>
            <a>ENG</a>
            
          </a>
        </div>
          
        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg"  width="30" height="24" class="d-inline-block align-text-top"/>
          <img src="/docs/5.3/assets/brand/bootstrap-logo.svg"  width="30" height="24" class="d-inline-block align-text-top"/>
      </nav>

  );
};

export default Navbar;
