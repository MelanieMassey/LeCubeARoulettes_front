import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import "./Dashboard.css"
import EventUser from '../EventUser/EventUser.jsx';
import { localApiURL } from '../../api/apiCalls.js';


export default function Dashboard() {
    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState('');
    
    console.log("USER => "+JSON.stringify(user))
    let userId = user.user.id;
    console.log(userId)

    useEffect(() => {
        getUserEvents();
        console.log(userEvents);
        console.log(user.roles[0].id);
    }, [])

    const getUserEvents = async () => {
        try {
            const response = await axios.get(`${localApiURL}dashboard/user/${userId}/events`, {
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
                    
                    {
                        user.roles[0].id == 2 ?
                        <>
                            <h3>Vos réservations d'ateliers</h3>
                            <div className="dashboard-user-events-content">
                                { userEvents ? userEvents.map(event => {
                                    console.log(event.name)
                                    return <EventUser value={event}/>
                                }) :  <p>No event</p>}
                            </div>
                        </>
                         :
                        user.roles[0].id == 1 ?
                        <>
                            <h3>Votre espace administrateur</h3>
                            <div className="dashboard-user-events-content">
                                
                            </div>
                        </>
                        :
                        <p>Pas d'utilisateur trouvé</p>
                    }

                    {/* <h3>Vos réservations d'ateliers</h3>
                    <div className="dashboard-user-events-content">
                        { userEvents ? userEvents.map(event => {
                            console.log(event.name)
                            return <EventUser value={event}/>
                        }) :  <p>No event</p>}
                    </div> */}
                </div>
            </div>
            
        </section>
    );
}