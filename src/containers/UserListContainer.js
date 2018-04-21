import { connect } from 'react-redux'
import { setModalId, showModal } from '../actions/userActions'
import UserList from '../components/UserList'

const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: id => {
      dispatch(setModalId(id));
      dispatch(showModal());
    }
  }
}

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default UserListContainer