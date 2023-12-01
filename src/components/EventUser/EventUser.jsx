import React, { useEffect } from "react";
import './EventUser.css';

export default function Ateliers(props) {

    console.log("PROPS = "+ JSON.stringify(props))

    return(
        <div className="eventUser-main">
            <h4>{props.value.name}</h4>
            <p>{props.value.eventDate}</p>
            <button>Annuler</button>
        </div>
    )
}