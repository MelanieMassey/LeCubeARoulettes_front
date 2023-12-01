import './Event.css';

export default function Event(props) {

    return(
        <div className="event-main">
            <h4>{props.value.name}</h4>
            <p>{props.value.eventDate}</p>
            <button>Réserver</button>
        </div>
    )
}