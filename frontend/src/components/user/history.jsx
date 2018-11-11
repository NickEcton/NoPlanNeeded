import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/history.css";
import modalx from "../../images/modal-x-btn.png";
import HistoryIndexItems from './historyIndexItems.jsx';

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

  componentDidMount(){
    this.props.fetchPastEvents();
  }

  render() {
    let pastEvents = (this.props.events) ? (
      this.props.events.map((event) => (
          <HistoryIndexItems event={event} key={event.id}/>
        ))
    ) : "";

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
          <Link id="current-tab" to='/history'>
            History
          </Link>
          <Link to='/about'>
            About Us
          </Link>
        </div>
        <div className="history-div">
          <img
            id="modal-x"
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>Check out the events you've saved!</h1>
          <ul>
            { pastEvents }
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(History);
