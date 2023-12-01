import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Event from "../Event/Event";
import './Events.css';

export default function Events() {

    const [allEvents, setAllEvents] = useState();

    // const { data } = useQuery(
    //     {
    //         queryKey: ['events'],
    //         queryFn: ()=>{
    //             return axios.get("http://localhost:8081/api/events")
    //                 .then((res) => res.data)
    //                 .catch(function (error) {
    //                     console.log(error);
    //                 })
    //         }
    //     }
    // );

    // console.log(data)

    useEffect(() => {
        getAllEvents();
        console.log(allEvents);
    }, [])

    const getAllEvents = async () => {
        try {
            const response = await axios.get("http://localhost:8081/api/events")
            
            console.log(JSON.stringify(response?.data));
            setAllEvents(response.data)
            
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <div className="events-main">
            <h2>Planning des ateliers</h2>
            <div className="events-container">
                {
                    allEvents ? 
                    allEvents.map(event => {
                        console.log(event.name)
                        return <Event value={event}/>
                    }) :  
                    <p>Pas d'évènements prévus pour le moment.</p>
                }
            </div>
        </div>
    )
}