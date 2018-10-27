import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/about.css";
import modalx from "../../images/modal-x-btn.png";

class History extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("history-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div
        id="history-modal"
        className="modal-background"
        onClick={this.closeModal}
      >
        <div className='tabs-div'>
          <Link to='/account'>
            Account
          </Link>
          <Link to='/preferences'>
            Preferences
          </Link>
          <Link to='/history'>
            History
          </Link>
          <Link id="current-tab" to='/about'>
            About Us
          </Link>
        </div>
        <div className="about-div">
          <img
            id="modal-x"
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
        <h3>Who Are We?</h3>
          <p className="about-text">We are four software developers from all around the country (Oklahoma, LA, Indiana, Seattle) who met while in school in San Francisco. </p>
        <h3>Our Mission</h3>
          <p className="about-text">When moving to a new city, it can often be frustrating trying to organize plans when you are not familiar with the area. Enter NoPlanNeeded, where with the click of a button you will have something fun to do. </p>
        </div>
      </div>
    );
  }
}

export default withRouter(History);
