import { connect } from 'react-redux';
import EventShow from './event_show';
import { pickRandomEvent } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        event: state.entities.events.event
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchEvent: (pojo) => dispatch(pickRandomEvent(pojo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);