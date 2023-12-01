import React, { useEffect } from "react";
import './Event.css';

export default function Event(props) {

    console.log("PROPS = "+ JSON.stringify(props))

    return(
        <div className="eventUser-main">
            <h4>{props.value.name}</h4>
            <p>{props.value.eventDate}</p>
            <button>Me désinscrire</button>
        </div>
    )
}