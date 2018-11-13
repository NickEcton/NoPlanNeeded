import React from "react";
import "../../stylesheets/history.css";
import concert from "../../images/audience-blur-bokeh-976866.jpg";
import ellipsis from "../../images/ellipsis.png";


const HistoryIndexItems = ({event}) => {

    let eventPicture = event.picture;

    if (event.picture === 'not available') {
      eventPicture = concert;
    }

    if (!event.picture) {
      eventPicture = concert;
    } else if (event.picture.data) {
      const img = new Image();
      img.src = event.picture.data;
      eventPicture = img
    }

    const toggleShowMore = () => {
        const p = document.getElementById(event.id);
        p.classList.toggle('show-more');
    }

    return(
        <li className='history-li'>
            <img src={eventPicture} alt='event-pic'/>
            <div className='event-history-info'>
                <h2>{event.title}</h2>
                <h3>{event.eventDate}</h3>
                <p id={event.id} className='history-p'>
                    {event.description}
                </p>
                <img
                    id="ellipsis"
                    className="ellipsis"
                    src={ellipsis}
                    alt="ellipsis"
                    onClick={toggleShowMore}
                />
            </div>
        </li>
    );
}

export default HistoryIndexItems;
