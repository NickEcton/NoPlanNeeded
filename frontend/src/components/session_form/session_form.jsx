import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/session_form.css';
import modalx from "../../images/modal-x-btn.png";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.autoFill = this.autoFill.bind(this);
    this.idx = 0;
    this.idx2 = 0;
  }


  //updating the local state
  update(field) {
    if (field === 'email') {
      return e => this.setState({
        [field]: e.currentTarget.value,
        name: e.currentTarget.value.split('@')[0]
      })
    } else {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  //autotype the demo user and password
  autoFill() {
    const speed = 70;
    const text1 = "demo@demo.com";
    const text2 = "password";

    if (this.idx < text1.length) {
      this.setState({
        email: this.state.email + text1.charAt(this.idx)
      }, () => {
        this.idx++;
        setTimeout(this.autoFill, speed);
      });
    } else if (this.idx2 < text2.length) {
      this.setState({
        password: this.state.password + text2.charAt(this.idx2)
      }, () => {
        this.idx2++;
        setTimeout(this.autoFill, speed);
      });
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
    }
  }

  //processForm is either signup a user or logging in an user
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }



  closeModal(e) {
    const modal = document.getElementById('session-modal')
    const xBtn = document.getElementById('modal-x')
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push('/');
    }
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  //need to render a conditional login / sign up inputs for everything depending on the form

  render() {
    if(this.props.formType === 'Sign up') {
      return (
        <div id='session-modal'
          className="modal-background"
          onClick={this.closeModal}>
          <div className="session-form-div">
            <img id='modal-x'
              className="modal-x"
              src={modalx}
              alt="close modal button"
              onClick={this.closeModal}
            />
            <h1>Join No Plan Needed</h1>
            <form onSubmit={this.handleSubmit} className="session-form">
              <label>
                Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="session-input" />
              </label>
              <label>
                Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="session-input" />
              </label>
              <label>Confirm Password
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  className="session-input"
                />
              </label>
              <button className='session-button' type='submit'>Sign up</button>
            </form>
            <h2>Already have an account?  {this.props.navLink}</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div id='session-modal'
          className="modal-background"
          onClick={this.closeModal}>
          <div className="session-form-div">
            <img id='modal-x'
              className="modal-x"
              src={modalx}
              alt="close modal button"
              onClick={this.closeModal}
            />
            <h1>Log In to No Plan Needed</h1>
            <form onSubmit={this.handleSubmit} className="session-form">
              <div className="session-form">
                <label>
                  Email
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="session-input" />
                </label>
                <label>
                  Password
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="session-input"/>
                </label>
                <button className='session-button' type='submit'>Log in</button>
              </div>
            </form>
            <button className='session-button' 
              onClick={this.autoFill}>
              Log in as Guest
            </button>
            <h2>Don't have an account? {this.props.navLink}</h2>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
