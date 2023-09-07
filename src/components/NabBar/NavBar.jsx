import React from "react";
import "./NavBar.css";
import logoSmall from '../../assets/logo_small.png';

export default function NavBar(){

    window.onscroll = function() {scrollFunction()};

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
                <a href="">Accueil</a>
                <a href="">Les ateliers</a>
                <a href="">Contact</a>
                <a href="" id="login-button">Connexion</a>
            </nav>
        </header>
        
    )
}