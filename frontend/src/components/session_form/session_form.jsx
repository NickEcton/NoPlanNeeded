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
  }


  //updating the local state
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    if (e.target == modal || e.target == xBtn) {
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
    let signupNameInput;
    let signupSecondPasswordInput; 
    if(this.props.formType === 'Sign up') {
      return (
        <div id='session-modal'
          className="session-modal-background"
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
              <label>Username:
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                />
              </label>
              <label>
                Email
                <input type="text" 
                  value={this.state.email} 
                  onChange={this.update("email")} 
                  className="login-input" />
              </label>
              <label>
                Password
                <input type="password" 
                  value={this.state.password} 
                  onChange={this.update("password")} 
                  className="login-input" />
              </label>
              <label>Confirm Password
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  className="login-input"
                />
              </label>
              <input className="session-submit" 
                type="submit" 
                value={this.props.formType} />
            </form>
            <h2>Already have an account?  {this.props.navLink}</h2>
          </div>
        </div>
      )
    } else {
      return (
        <div id='session-modal' 
          className="session-modal-background" 
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
                    className="login-input" />
                </label>
                <label>
                  Password
                  <input type="password" 
                    value={this.state.password} 
                    onChange={this.update("password")} 
                    className="login-input"/>
                </label>
                <input className="session-submit" 
                  type="submit" 
                  value={this.props.formType} />
              </div>
            </form>
            <h2>Don't have an account? {this.props.navLink}</h2>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);