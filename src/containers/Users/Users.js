import { connect } from 'react-redux';
import Users from '../../components/Users/Users';
import { followAC, unfollowAC, setUsers } from '../../redux/reducers/usersReducer';

const mapStateToProps = state => {
	return {
		state: state.usersPage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		followCB: id => dispatch(followAC(id)),
        unfollowCB: id => dispatch(unfollowAC(id)),
        setUsersCB: users => dispatch(setUsers(users)),        
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);
