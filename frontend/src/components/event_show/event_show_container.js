import { connect } from 'react-redux';
import EventShow from './event_show';
import { pickRandomEvent } from '../../actions/event_actions';
import { createPastEvents } from '../../actions/past_events_actions';

const mapStateToProps = state => {
    return {
        event: state.entities.events.event,
        categories: state.entities.preferences
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: (pojo) => dispatch(pickRandomEvent(pojo)),
        createPastEvents: (pojo) => dispatch(createPastEvents(pojo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);