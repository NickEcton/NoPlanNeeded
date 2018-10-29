import React from "react";
import "../../stylesheets/history.css";


const HistoryIndexItems = ({event}) => {
    return( 
        <div>
            <ul>
                <li><h2>{event.title}</h2></li>
                <li>{event.description}</li>
                <li>{event.eventDate}</li>
            </ul>
        </div>
    );
}

export default HistoryIndexItems;