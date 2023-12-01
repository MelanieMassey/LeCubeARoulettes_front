import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import './EventUser.css';

export default function EventUser(props) {

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
    ); // array constains a unique key that represents the useQuery hook

    console.log(data[0].name)



    return(
        <div className="eventUser-main">
            <h4>{data[0].name}</h4>
            {/* <p>{props.value.eventDate}</p> */}
        </div>
    )
}