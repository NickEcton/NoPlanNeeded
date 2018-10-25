import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/preferences.css";
import modalx from "../../images/modal-x-btn.png";

class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("preferences-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div
        id="preferences-modal"
        className="modal-background"
        onClick={this.closeModal}
      >
        <div className="preferences-div">
          <img
            id="modal-x"
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>Preferences Page</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Preferences);
