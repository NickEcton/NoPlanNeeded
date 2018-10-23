import React from 'react';
import { withRouter } from 'react-router-dom';

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
    if(this.props.formType === 'signup') {
      //creating variables different inputs for the sign up form
      //name input and second password (password2) input
      signupNameInput = (
          <label>name:
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                />
          </label>);
      signupSecondPasswordInput = (
          <label>Reconfirm Password:
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  className="login-input"
                />
              </label>
      );
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to No Plan Needed
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <div className="login-form">
            { signupNameInput }
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            { signupSecondPasswordInput }
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);