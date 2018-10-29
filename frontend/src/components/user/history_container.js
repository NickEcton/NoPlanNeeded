import { connect } from "react-redux";
import History from "./history";
import { fetchPastEvents } from '../../actions/past_events_actions.js';

//filter events by belonging to the current user
const filterByUsers = (pastEventsObj, currentUserId) => {
  let pastEventsArray = Object.values(pastEventsObj);
  let relatedEvents = [];
  
  for(let i = 0; i < pastEventsArray.length; i++){
    let pastEvent = pastEventsArray[i]
    if(pastEvent.userId === currentUserId){

      relatedEvents.push(pastEventsArray[i]);
    }
  }
  return relatedEvents;
}


const mapStateToProps = state => {
  return {
    events: filterByUsers(state.entities.pastEvents, state.session.id)
    // events: Object.values(state.entities.pastEvents)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPastEvents: () => dispatch(fetchPastEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
