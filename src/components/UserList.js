import React from 'react'
import PropTypes from 'prop-types'
import User from './User'
import { ListGroup } from 'reactstrap';

const UserList = ({ users, onUserClick }) => (
  <ListGroup style={{width: "50%", margin: "0 auto"}}>
    {users.map((user, index) => (
      <User key={index} {...user} onClick={() => onUserClick(index)} />
    ))}
  </ListGroup>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UserList