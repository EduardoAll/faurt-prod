import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return(
    <header>
      <div className= 'nv-logo'>
        <h2 className="logo"> Faurt-Prod </h2>
      </div>
      <nav className="nv" ref={navRef}>
       <a href="/#" onClick={hideNavbar}>Inicio</a>
       <a href="/#bio" onClick={hideNavbar}>Bio</a>
       <a href="/#trabajos" onClick={hideNavbar}>Trabajos</a>
       <a href="/#servicios" onClick={hideNavbar}>Servicios</a>
       <a href="/#contacto" onClick={hideNavbar}>Contacto</a>
       <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes/>
       </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
         <FaBars/>
      </button>
    </header>


  );
}

export default Navbar;
