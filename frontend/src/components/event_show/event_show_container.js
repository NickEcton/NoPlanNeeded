import { connect } from 'react-redux';
import EventShow from './event_show';
import { pickRandomEvent } from '../../actions/event_actions';
import { createPastEvents } from '../../actions/past_events_actions';
import { fetchPreference } from '../../actions/preferences_actions.js';

const mapStateToProps = state => {
    return {
        event: state.entities.events.event,
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: (pojo) => dispatch(pickRandomEvent(pojo)),
        createPastEvents: (pojo) => dispatch(createPastEvents(pojo)),
        fetchPreference: () => dispatch(fetchPreference())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);