import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/account.css'
import modalx from '../../images/modal-x-btn.png';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("account-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  render() {

    return (
      <div id='account-modal'
        className='modal-background'
        onClick={this.closeModal}>
        <div className='account-div'>
          <img id='modal-x'
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>Account Page</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Account);