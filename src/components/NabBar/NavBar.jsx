import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logoSmall from '../../assets/logo_small.png';
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function NavBar(){

  // const [navBarFixed, setNavBarFixed] = useState("0");
  let {urlParams} = useParams();
  const { user, setUser } = useContext(UserContext);

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

  function logOutUser(){
    setUser(null)
  }

  return(
      <header id="header">
          <Link to={"/"} className="header-logo">
              <img className='logo-small' src={logoSmall} alt='Logo de la boutique le cube à roulettes'/>
          </Link>
          <nav>
              <Link to={"/"} className="navLink-home">Accueil</Link>
              <Link to={"/events"} className="navLink-events">Les ateliers</Link>
              <a href="">Contact</a>
              
              {user? (
                  <Link to={"/"} className="login-button navLink-logOut" onClick={logOutUser}>Déconnexion</Link>
              ):(
                <Link to={"/login"} className="login-button navLink-logIn">Connexion</Link>
              )}
          </nav>
      </header>
      
  )
}