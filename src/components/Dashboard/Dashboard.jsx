import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import "./Dashboard.css"
import EventUser from '../EventUser/EventUser.jsx';


export default function Dashboard() {
    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState('');
    
    console.log("USER => "+JSON.stringify(user))
    let userId = user.user.id;
    console.log(userId)

    useEffect(() => {
        getUserEvents();
        console.log(userEvents);
    }, [])

    const getUserEvents = async () => {
        try {
            const response = await axios.get(`http://34.163.89.215:8081/api/dashboard/user/${userId}/events`, {
                // Data : pas encore de données
                },{
                    headers: { "Content-Type": "application/json" }
                })
            
            console.log(JSON.stringify(response?.data));
            setUserEvents(response.data)
            
        } catch (err) {
            console.log(err.message)
        }
    }
    

    return(
        <section className="dashboard-main">
            <h2>Bonjour {user.user.firstName}</h2>

            <div className="dashboard-user">
                <div className="dashboard-user-events">
                    <h3>Vos réservations d'ateliers</h3>
                    <div className="dashboard-user-events-content">
                        {userEvents ? userEvents.map(event => {
                            console.log(event.name)
                            return <EventUser value={event}/>
                        }) :  <p>No event</p>}
                    </div>
                </div>
            </div>
            
        </section>
    );
}