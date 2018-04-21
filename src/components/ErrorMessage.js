import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap';

const ErrorMessage = ({ message, shouldShow }) => (
  shouldShow ? <Alert color="danger">{message}</Alert> : ''
)

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  shouldShow: PropTypes.bool.isRequired
}

export default ErrorMessage