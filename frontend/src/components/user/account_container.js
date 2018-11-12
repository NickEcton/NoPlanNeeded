import { connect } from 'react-redux';
import Account from './account';
import { fetchPastEvents } from "../../actions/past_events_actions.js";

//filter events by belonging to the current user
const filterByUsers = (pastEventsObj, currentUserId) => {
  let pastEventsArray = Object.values(pastEventsObj);
  let relatedEvents = [];

  for (let i = 0; i < pastEventsArray.length; i++) {
    let pastEvent = pastEventsArray[i];
    if (pastEvent.userId === currentUserId && i < 3) {
      relatedEvents.push(pastEventsArray[i]);
    }
  }
  return relatedEvents;
}

const mapStateToProps = state => {
  return {
    events: filterByUsers(state.entities.pastEvents, state.session.id),
    users: state.entities.users,
    session: state.session 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPastEvents: () => dispatch(fetchPastEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);