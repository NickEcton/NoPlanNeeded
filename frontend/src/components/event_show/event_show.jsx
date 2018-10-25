import React from 'react';
import '../../stylesheets/event_show.css'
import modalx from '../../images/modal-x-btn.png';
import concert from '../../images/audience-blur-bokeh-976866.jpg'
import Map from './map';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("event-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  render() {
    return(
      <div id='event-modal'
        className='modal-background'
        onClick={this.closeModal}>
        <div className='event-show-div'>
          <img id='modal-x'
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>Event Title</h1>
          <div className='event-img-map'>
            <div className='event-img'>
              <img src={concert} />
            </div>
            <Map />
          </div>
          <div className='event-info'>
          </div>
          <div className='event-buttons'>
            <button>Save Event</button>
            <button>Get New Event</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
