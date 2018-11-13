import React from 'react';
import "../../stylesheets/greeting.css";
import modalx from "../../images/modal-x-btn.png";

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
    return (
      <div id="greeting-modal" 
        className="modal-background"
        onClick={this.closeModal}
      >
        <div className='greeting-div'>
          <img
            id="greeting-x"
            className="greeting-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />

        </div>
      </div>
    );
  }
}

export default Greeting;