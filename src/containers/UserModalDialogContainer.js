import { connect } from 'react-redux'
import { showModal, hideModal, createUser, setModalId, updateUser, deleteUser } from '../actions/userActions'
import UserModalDialog from '../components/UserModalDialog'

const mapStateToProps = state => {
  return {
    show: state.userReducer.appState.showUserModal,
    name: state.userReducer.appState.modalId > -1 ? state.userReducer.users[state.userReducer.appState.modalId].name : '',
    email: state.userReducer.appState.modalId > -1 ? state.userReducer.users[state.userReducer.appState.modalId].email : '',
    id: state.userReducer.appState.modalId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => {
        dispatch(setModalId(-1));
        dispatch(showModal());
    },
    closeModal: () => {
        dispatch(hideModal());
    },
    createUser: (name, email) => {
        dispatch(createUser(name, email));
    },
    updateUser: (id, name, email) => {
        dispatch(updateUser(id, name, email));
        dispatch(setModalId(-1));
    },
    deleteUser: (id) => {
        dispatch(deleteUser(id));
        dispatch(setModalId(-1));
        dispatch(hideModal());
    }
  }
}

const UserModalDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModalDialog)

export default UserModalDialogContainer