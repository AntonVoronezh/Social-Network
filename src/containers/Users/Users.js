import { connect } from 'react-redux';
import Users from '../../components/Users/Users';
import { followAC, unfollowAC, setUsersAC } from '../../redux/reducers/usersReducer';

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		followCB: id => dispatch(followAC(id)),
        unfollowCB: id => dispatch(unfollowAC(id)),
        setUsersCB: users => dispatch(setUsersAC(users)),        
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);
