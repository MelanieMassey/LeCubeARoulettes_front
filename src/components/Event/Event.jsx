import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import './Event.css';

export default function Event(props) {

    const { data } = useQuery(
        {
            queryKey: ['events'],
            queryFn: ()=>{
                return axios.get("http://localhost:8081/api/events")
                        .then((res) => res.data)
                        .catch(function (error) {
                            console.log(error);
                        })
            }
        }
    );

    console.log(data)

    return(
        <div className="event-main">
            <h4>{props.value.name}</h4>
            <p>{props.value.eventDate}</p>
            <button>Réserver</button>
        </div>
    )
}