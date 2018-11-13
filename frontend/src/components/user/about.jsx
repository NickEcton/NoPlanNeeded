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
    const modal = document.getElementById("about-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div
        id="about-modal"
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
          <p className="about-text">We are four software developers from all around the country (Oklahoma, Los Angeles, Indiana, Seattle) who met while in school in San Francisco. </p>
        <h3>Our Mission</h3>
          <p className="about-text">When moving to a new city, it can often be frustrating trying to organize plans when you are not familiar with the area. Enter NoPlanNeeded, where with the click of a button you will have something fun to do. </p>
        <h3>The Team</h3>
          <p className="about-text">
            <a href="https://www.linkedin.com/in/clayton-christian/">Clayton</a>
            <a href="https://www.linkedin.com/in/devin-flood-02032125/">Devin</a>
            <a href="https://www.linkedin.com/in/nicholas-ecton-095423120/">Nick</a>
            <a href="https://www.linkedin.com/in/hsusteph5/">Stephanie</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(History);
