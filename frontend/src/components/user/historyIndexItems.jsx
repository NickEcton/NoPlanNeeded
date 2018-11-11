import React from "react";
import "../../stylesheets/history.css";
import concert from "../../images/audience-blur-bokeh-976866.jpg";


const HistoryIndexItems = ({event}) => {

    let eventPicture = event.picture;

    if (event.picture === 'not available') {
      console.log('picture not available')
      eventPicture = concert;
    }

    if (!event.picture) {
      console.log('no event.picture')
      eventPicture = concert;
    } else if (event.picture.data) {
      console.log('picture.data')
      const img = new Image;
      img.src = event.picture.data;
      eventPicture = img
    }

    return(
        <li className='history-li'>
            <img src={eventPicture}/>
            <h2>{event.title}</h2>
            <h3>{event.description}</h3>
            <h3>{event.eventDate}</h3>
        </li>
    );
}

export default HistoryIndexItems;
