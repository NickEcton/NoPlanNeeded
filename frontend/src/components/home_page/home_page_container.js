import { connect } from 'react-redux';
import { 
  receiveEventful, 
  receiveGooglePlaces, 
  receiveEventfulImage, 
  receiveGoogleImage
} from '../../actions/event_actions';
import HomePage from './home_page.jsx';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  receiveEventful: () => dispatch(receiveEventful()),
  receiveEventfulImage: () => dispatch(receiveEventfulImage()),
  receiveGooglePlaces: (type, location) => dispatch(receiveGooglePlaces(type, location)),
  receiveGoogleImage: (id) => dispatch(receiveGoogleImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)