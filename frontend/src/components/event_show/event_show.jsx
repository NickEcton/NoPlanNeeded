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
      category: null
    });
  }

  componentDidMount() {
    this.initGeolocation();
  }

  render() {
    if (this.props.event) {
      return (
        <div
          id="event-modal"
          className="modal-background"
          onClick={this.closeModal}
        >
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
                <img src={concert} />
              </div>
              <div className="event-map">
                <Map location={this.props.event.location} />
              </div>
            </div>
            <div className="event-info">
              <h1>{this.props.event.description}</h1>
            </div>
            <div className="event-buttons">
              <button>Save Event</button>
              <button
                onClick={this.getEvent}
              >
                Get New Event
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default EventShow;
