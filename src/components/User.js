import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Container, Row, Col } from 'reactstrap'

const User = ({ name, email, onClick }) => (
  <ListGroupItem
    onClick={onClick}
  >
    <Container>
      <Row>
        <Col xs="2">
          User Name:  
        </Col>
        <Col xs="4">
          {name}
        </Col>
        <Col xs="2">
          Email:  
        </Col>
        <Col xs="4">
          {email}
        </Col>
      </Row>
    </Container>
  </ListGroupItem>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default User