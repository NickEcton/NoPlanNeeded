import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/history.css";
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
        <div className="history-div">
          <img
            id="modal-x"
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>History Page</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(History);
