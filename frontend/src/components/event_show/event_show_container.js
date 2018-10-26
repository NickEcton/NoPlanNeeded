import { connect } from 'react-redux';
import EventShow from './event_show';
import {
    receiveEventful,
    receiveGooglePlaces
} from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        event: state.entities.events.event
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveEventful: () => dispatch(receiveEventful()),
        receiveGooglePlaces: (type, location) => dispatch(receiveGooglePlaces(type, location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);