import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Dashboard.css"
import { getUserEvents } from "../../api/apiCalls";
import EventUser from '../EventUser/EventUser.jsx';


export default function Dashboard() {

    const { user } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState();

    console.log("*** USER *** "+JSON.stringify(user));
    let userId = user.id;
    console.log("user id = "+userId);

    useEffect(()=> {
        initData(userId);
        console.log("*** user events *** "+JSON.stringify(userEvents))
    },[])

    async function initData(userId){
        let events = await getUserEvents(userId);
        setUserEvents(events);
        
    }

    return(
        <section className="dashboard-main">
            <h2>Bonjour {user.firstName}</h2>

            <div className="dashboard-user">
                <div className="dashboard-user-events">
                    <h3>Vos réservations d'ateliers</h3>
                    <div className="dashboard-user-events-content">
                        {userEvents.map(event => {
                            console.log(event.name)
                            return <EventUser value={event}/>
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    );
}