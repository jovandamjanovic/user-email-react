import React, { Component } from 'react';
import UserListContainer from './containers/UserListContainer';
import UserModalDialogContainer from './containers/UserModalDialogContainer';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { showModal, setModalId } from './actions/userActions';

class App extends Component {
  render() {
    return (
      <div>
        <Button size="lg" color="primary" style={{width: "33%", margin: '20px auto'}}onClick={this.props.openModal} block>Add New User</Button>
        <UserListContainer />
        <UserModalDialogContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => {
        dispatch(setModalId(-1));
        dispatch(showModal());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
