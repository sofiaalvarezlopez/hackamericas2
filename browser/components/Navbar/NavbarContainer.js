import { connect } from 'react-redux';
import Navbar from './Navbar';
import { setMapMode } from '../../redux/mapMode';

const mapStateToProps = ({ mapMode}) => ({ mapMode });

const mapDispatchToProps = dispatch => ({
  setMapMode: mode => dispatch(setMapMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
