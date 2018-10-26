import React from "react";
import "../../stylesheets/event_show.css";
import modalx from "../../images/modal-x-btn.png";
import concert from "../../images/audience-blur-bokeh-976866.jpg";
import Map from "./map";

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 37.792118,
      lng: -122.408626
    };

    this.closeModal = this.closeModal.bind(this);
    this.initGeolocation = this.initGeolocation.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getNewEvent = this.getNewEvent.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("event-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  initGeolocation() {
    if (navigator.geolocation) {
      // Call getCurrentPosition with success and failure callbacks
      navigator.geolocation.getCurrentPosition(
        // On success...
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          // debugger
          this.getEvent();
        },
        //On failure...
        () => {
          alert("Could not get current location, using default location instead.");
          this.getEvent();
        }
      );
    } else {
      alert("Your browser does not support geolocation, using default location instead.");
      this.getEvent();
    }
  }

  getEvent() {
    this.props.fetchEvent({
      location: [this.state.lat, this.state.lng],
      categories: [
        'random', 
        'family-friendly', 
        'concerts', 
        'outdoors', 
        'adult', 
        'historic',
        'food',
        'sports'
      ]
    });
  }

  getNewEvent() {
    document.getElementById('refresh-loader').classList.remove('hidden')
    this.props.fetchEvent({
      location: [this.state.lat, this.state.lng],
      category: null
    });

  }

  componentDidMount() {
    this.initGeolocation();
  }

  componentDidUpdate(prevProps) {
    if (this.props.event !== prevProps.event) {
      document.getElementById("refresh-loader").classList.add("hidden");
    }
  }

  render() {
    if (this.props.event) {

      let eventPicture = this.props.event.picture;

      if (this.props.event.picture === 'not available') {
        // debugger
        eventPicture = concert;
      }

      if (!this.props.event.picture) {
        // debugger 
        eventPicture = concert;
      }

      
      
      return (
        <div
        id="event-modal"
        className="modal-background"
        onClick={this.closeModal}
        >
          <div id='refresh-loader' className='loader hidden'></div>
          <div className="event-show-div">
            <img
              id="modal-x"
              className="modal-x"
              src={modalx}
              alt="close modal button"
              onClick={this.closeModal}
            />
            <h1>{this.props.event.title}</h1>
            <div className="event-img-map">
              <div className="event-img">
                <img id='event-image'
                  src={eventPicture} />
              </div>
              <div className="event-map">
                <Map location={this.props.event.location} />
              </div>
            </div>
            <div className="event-info">
              <textarea>
                {this.props.event.description}
              </textarea>
            </div>
            <div className="event-buttons">
              <button>Save Event</button>
              <button onClick={this.getNewEvent}>
                Get New Event
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className='loader'></div>;
    }
  }
}

export default EventShow;
