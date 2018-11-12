import React from "react";
import "../../stylesheets/account.css";
import concert from "../../images/audience-blur-bokeh-976866.jpg";


const RecentIndexItems = ({ event }) => {

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



  return (
    <div className='recent-event'>
      <img src={eventPicture} alt='event-pic' />
      <h2>{event.title}</h2>
    </div>
  );
}

export default RecentIndexItems;
