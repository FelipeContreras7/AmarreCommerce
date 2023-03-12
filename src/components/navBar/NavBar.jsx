import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
function NavBar() {
  const burguer = <FontAwesomeIcon icon={faBars} />;
  const carrito = <FontAwesomeIcon icon={faBagShopping} />;
  const [burguers, setBurguers] = useState("1");
  function handlerNav() {
    if (burguers === "1") {
      document.querySelector("#burguer").className = "itemsNavExpandida";
      setBurguers("2");
    } else {
      document.querySelector("#burguer").className = "itemsNav";
      setBurguers("1");
    }
  }
  return (
    <div className="navBar">
      <div className="navSuperior">
        <p>- Envíos a todo el país -</p>
      </div>
      <div className="navInferior">
        <div className="items">
          <div className="burguer" onClick={handlerNav}>
            {burguer}
          </div>
          <div id="burguer" className="itemsNav">
            <Link to={"/"} onClick={handlerNav}>
              Inicio
            </Link>
            <Link to={"/"} onClick={handlerNav}>
              Aritos
            </Link>
            <Link to={"/"} onClick={handlerNav}>
              Collares
            </Link>
            <Link to={"/"} onClick={handlerNav}>
              Pulseras
            </Link>
            <Link to={"/"} onClick={handlerNav}>
              Straps
            </Link>
            <Link to={"/"} className="btnIniciarSesion" onClick={handlerNav}>
              Iniciar Sesión
            </Link>
          </div>
        </div>
        <div className="logo">
          <img src="./img/logoAmarre1.png" alt="logo amarre" />
        </div>
        <div className="carrito">
          <Link>{carrito}</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
