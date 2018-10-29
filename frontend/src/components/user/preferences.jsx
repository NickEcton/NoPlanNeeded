import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../stylesheets/preferences.css";
import modalx from "../../images/modal-x-btn.png";

class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adult: "", 
      familyFriendly: "",
      concerts: "", 
      food: "", 
      historic: "", 
      outdoors: "",
      sports: "",
      random: "" 
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal(e) {
    const modal = document.getElementById("preferences-modal");
    const xBtn = document.getElementById("modal-x");
    if (e.target === modal || e.target === xBtn) {
      this.props.history.push("/");
    }
  }

  handleInputChange(e) {
    const target = e.target; 
    //checks if the target type 
    //target.checked will check the current state's T or F 
    const value = (target.type === 'checkbox') ? target.checked : ""; 
    const name = target.name; 

    this.setState({ [name]: value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.editPreference(this.state);
  }


  componentDidMount() {
    this.props.fetchPreference();
  }

  componentDidUpdate(prevProps){
    if(prevProps.preference != this.props.preference) {
      this.setState({
        adult: this.props.preference.adult, 
        familyFriendly: this.props.preference.familyFriendly,
        concerts: this.props.preference.concerts, 
        food: this.props.preference.food, 
        historic: this.props.preference.historic, 
        outdoors: this.props.preference.outdoors,
        sports: this.props.preference.sports,
        random: this.props.preference.random 
      })}
  }

  render() {
    if(!this.props.preference) {
      return (
        <div className="loader">
        </div>
      );
    }
    return (
      <div
        id="preferences-modal"
        className="modal-background"
        onClick={this.closeModal}
      >
        <div className="tabs-div">
          <Link to='/account'>
            Account
          </Link>
          <Link id="current-tab" to='/preferences'>
            Preferences
          </Link>
          <Link to='/history'>
            History
          </Link>
          <Link to='/about'>
            About Us
          </Link>
        </div>
        <div className="preferences-div">
          <img
            id="modal-x"
            className="modal-x"
            src={modalx}
            alt="close modal button"
            onClick={this.closeModal}
          />
          <h1>Preferences Page</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="checkbox" name="adult" checked={this.state.adult} onChange={this.handleInputChange}></input>
                Adult 
              </label>


              <label>
              <input type="checkbox" name="concerts" checked={this.state.concerts} onChange={this.handleInputChange}></input>
              Concerts 
              </label>



              <label>
              <input type="checkbox" name="familyFriendly" checked={this.state.familyFriendly} onChange={this.handleInputChange}></input>
              Family Friendly 
              </label>



              <label>
              <input type="checkbox" name="food" checked={this.state.food} onChange={this.handleInputChange}></input>
              Food 
              </label>



              <label>
              <input type="checkbox" name="historic" checked={this.state.historic} onChange={this.handleInputChange}></input>
              Historic 
              </label>


              <label>
              <input type="checkbox" name="outdoors" checked={this.state.outdoors} onChange={this.handleInputChange}></input>
              Outdoors 
              </label>


              <label>
              <input type="checkbox" name="sports" checked={this.state.sports} onChange={this.handleInputChange}></input>
              Sports 
              </label>


              <label>
              <input type="checkbox" name="random" checked={this.state.random} onChange={this.handleInputChange}></input>
              Random 
              </label>

              <button type="submit"> Submit </button>
            </form>
        </div>
      </div>
    );
  }
}



//input information and updating local state is from:
// https://reactjs.org/docs/forms.html


export default withRouter(Preferences);
