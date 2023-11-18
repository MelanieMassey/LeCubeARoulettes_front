import React, { useEffect } from "react";
import './Ateliers.css';

export default function Ateliers() {

    useEffect(()=>{
        document.getElementById("header").style.top = "0";
    },[])

    return(
        <div className="ateliers-main">

        </div>
    )
}