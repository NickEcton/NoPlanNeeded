import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/account.css'
import modalx from '../../images/modal-x-btn.png';
import avatar from '../../images/avatar.png';

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
    let currentUser = this.props.users[this.props.session.id];

    return <div id="account-modal" className="modal-background" onClick={this.closeModal}>
        <div className="tabs-div">
          <Link id="current-tab" to="/account">
            Account
          </Link>
          <Link to="/preferences">Preferences</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="account-div">
          <img id="modal-x" className="modal-x" src={modalx} alt="close modal button" onClick={this.closeModal} />
          <div className='user-profile'>
            <img className='avatar' src={avatar}/>
            <div className='user-info'>
              <h1>{currentUser.name}</h1>
              <h1>{currentUser.email}</h1>
            </div>
          </div>
          <div className='recent-events'>
            <h1>Recent Events</h1>
          </div>
        </div>
      </div>;
  }
}


{/* <h1>Username</h1>
<h1>email@email.com</h1> */}
export default withRouter(Account);
