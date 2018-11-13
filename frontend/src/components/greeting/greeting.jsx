import React from 'react';
import { Link } from "react-router-dom";

import "../../stylesheets/greeting.css";

import modalx from "../../images/modal-x-btn.png";
import npnLogo from '../../images/npn-logo3.png';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("greeting-modal");
    const xBtn = document.getElementById("greeting-x");
    if (e.target === modal || e.target === xBtn) {
      modal.classList.add('hidden')
    }
  }

  render() {
    const sessionLinks = (this.props.currentUserId) ? (
      <p>
        Simply click the button to find something fun to do nearby.
      </p>
    ) : (
      <p>
        Simply click the button to find something fun to do nearby.
        Or<Link to="/login" > Login </Link>/
        <Link to="/signup" > Sign up </Link >
        for activities tailored to your preferences.
      </p>
    );

    return <div id="greeting-modal" className="modal-background" onClick={this.closeModal}>
        <div className="greeting-div">
          <img id="greeting-x" className="greeting-x" src={modalx} alt="close modal button" onClick={this.closeModal} />
          <h1>Welcome to</h1>
          <img className="npn-logo3" src={npnLogo} alt="npn logo" />
          { sessionLinks }
        </div>
      </div>;
  }
}

export default Greeting;