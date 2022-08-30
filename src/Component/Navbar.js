import React from "react";
import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const show = (event) => {
    event.preventDefault();
    setMenu(!menu);
    if(menu===false){
      document.body.style.overflow = 'hidden';
    }
    else if(menu===true){
      document.body.style.overflow= 'scroll';
    }
  };
  return (
    <div className="navbar_container">
    <div className="container containernav" >
      <div className="nav_container">
        <div className="navbar res-navbar">
          <div className="hamburger-menu">
            <a href="/" onClick={show}>
              <i class="fa-solid fa-bars"></i>
            </a>
            {/* <img
            src="./image/logo.png"
            className="logo-img res-logo-img"
            alt="logo"
          /> */}
            {/* <button onClick={show}> <i class="fa-solid fa-bars"></i></button> */}
          </div>
          <img
            src="./image/logo.png"
            className="logo-img res-logo-img"
            alt="logo"
          />
          <ul>
            <li className="sub-nav-li1 sub-nav-li-hide">
             <span>
             <img
                src="./image/crown.png"
                className="nav-img menu-nav-img"
                alt="icon"
              />
             </span>
              {/* <img
                src="./image/crown.png"
                className="nav-img menu-nav-img"
                alt="icon"
              /> */}
              <span>
              Subscribe
              </span>
            
            </li>
          </ul>

          <ul className="nav-ul">
            <li className="nav-li">
              <img
                src="./image/searchbar.png"
                alt="searchbar"
                className="nav-img"
              />{" "}
              Search
            </li>
            <li className="nav-li">
              <img src="./image/crown.png" alt="crown" className="nav-img" />{" "}
              Subscribe
            </li>
            <li className="nav-li">
              <img src="./image/signin.png" alt="signin" className="nav-img" />{" "}
              Sign
            </li>
          </ul>
        </div>
        <div className={menu ? "sub-nav res-subnav" : "sub-nav"}>
        <div className="nav_close">
            <span>
            <img
            src="./image/logo.png"
            className="logo-img res-logo-img"
            alt="logo"
          />
            </span>
            <span className="nav-cross" >
              <a href="/" onClick={show}>
              <i  class="fa-solid fa-xmark cross-icon"></i></a>
            </span>
          </div>
          <ul className="sub-ul-nav">
            <li className="sub-nav-li sub-nav-li-hide-home">Home</li>
            <li className="sub-nav-li sub-nav-li-hide-home">Sign In</li>
            <li className="sub-nav-li hide-menu">
              <img
                src="./image/crown.png"
                alt="glass-icon"
                className="nav-img menu-nav-img"
              />
              <span className="nav_subscribe_res"> Subscribe</span>
            </li>

            <li className="sub-nav-li extra-menu-one">Private Equity</li>
            <li className="sub-nav-li">Venture Capital</li>
            <li className="sub-nav-li">M&A</li>
            <li className="sub-nav-li">
              Industry
              <img
                src="./image/Icondown.png"
                alt="dropdwon"
                className="nav-drop-img"
              />
            </li>
            <li className="sub-nav-li">Stressed Assests</li>
            <li className="sub-nav-li">Limited Partner</li>
            <li className="sub-nav-li">Founder</li>
            <li className="sub-nav-li extra-menu">About Us</li>
            <li className="sub-nav-li extra-menu">Tag Listing</li>
            <li className="sub-nav-li extra-menu">Advertise With Us</li>
            <li className="sub-nav-li extra-menu">Contact Us</li>
            <li className="sub-nav-li extra-menu">VCC Mobile APP</li>
          </ul>
          <ul>
            <li className="sub-nav-li sub-nav-li-custom">
              Customize
              <img
                src="./image/Icondown.png"
                alt="dropdown"
                className="nav-drop-img"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
