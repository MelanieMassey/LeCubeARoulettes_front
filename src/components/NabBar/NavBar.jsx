import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logoSmall from '../../assets/logo_small.png';
import { Link, useParams } from "react-router-dom";

export default function NavBar(){

  // const [navBarFixed, setNavBarFixed] = useState("0");
  let {urlParams} = useParams();

  useEffect(()=>{
    if(urlParams = null) {
      document.getElementById("header").style.top = "-250px";
      window.onscroll = function() {scrollFunction()};
    }
  },[]);

  

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.backgroundColor = "#ECAEBD";
      } else {
        document.getElementById("header").style.top = "-250px";
        document.getElementById("header").style.backgroundColor = "transparent";
      }
    }

  return(
      <header id="header">
          <a href="" className="header-logo">
              <img className='logo-small' src={logoSmall} alt='Logo de la boutique le cube à roulettes'/>
          </a>
          
          <nav>
              <Link to={"/"}>Accueil</Link>
              <Link to={"/ateliers"}>Les ateliers</Link>
              <a href="">Contact</a>
              <Link to={"/login"} id="login-button">Connexion</Link>
          </nav>
      </header>
      
  )
}