import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/event_show.css'
import modalx from '../../images/modal-x-btn.png';

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
          <h1>Event Page</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(EventShow);