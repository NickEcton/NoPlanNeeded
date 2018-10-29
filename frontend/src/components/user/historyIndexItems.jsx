import React from "react";
import "../../stylesheets/history.css";
import concert from "../../images/audience-blur-bokeh-976866.jpg";


const HistoryIndexItems = ({event}) => {

    let eventPicture = event.picture;

    if (event.picture === 'not available') {
      // debugger
      console.log('picture not available')
      eventPicture = concert;
    }

    if (!event.picture) {
      // debugger
      console.log('no event.picture')
      eventPicture = concert;
    } else if (event.picture.data) {
      // debugger
      console.log('picture.data')
      const img = new Image;
      img.src = event.picture.data;
      eventPicture = img
    }

    return(
        <div className="history-index-item">
            <img src={eventPicture}/>
            <ul>
                <li><h2>{event.title}</h2></li>
                <li>{event.description}</li>
                <li>{event.eventDate}</li>
            </ul>
        </div>
    );
}

export default HistoryIndexItems;
