import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Dashboard.css"
import { getUserEvents } from "../../api/apiCalls";
import EventUser from '../EventUser/EventUser.jsx';
import axios from "axios";


export default function Dashboard() {

    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState('');
    const apiURL = "http://localhost:8081/api"

    console.log("*** USER *** "+JSON.stringify(user));
    let userId = user.id;
    console.log("user id = "+userId);    

    useEffect(()=> {
        initData();
        console.log(userEvents);
    },[])

    const initData= async () => {
        await axios.get(`${apiURL}/dashboard/user/${userId}/events`, {
            // Data : pas encore de données
            },{
                headers: { "Content-Type": "application/json" }
            })
            .then(response=>{
                console.log(response.data)
                setUserEvents(response.data);
        
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    return(
        <section className="dashboard-main">
            <h2>Bonjour {user.firstName}</h2>

            <div className="dashboard-user">
                <div className="dashboard-user-events">
                    <h3>Vos réservations d'ateliers</h3>
                    <div className="dashboard-user-events-content">
                        {userEvents > 0 ? userEvents.map(event => {
                            console.log(event.name)
                            return <EventUser value={event}/>
                        }) :  <p>No event</p>}
                    </div>
                </div>
            </div>
            
        </section>
    );
}