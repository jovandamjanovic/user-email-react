import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal';
import ErrorMessage from './ErrorMessage';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

ReactModal.setAppElement('#root');

class UserModalDialog extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props && this.props.name ? this.props.name : '',
            email: this.props && this.props.email ? this.props.email : '',
            touched: {
                user: false,
                email: false
            }
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.validateFields = this.validateFields.bind(this);
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        })
    }

    componentWillReceiveProps(newProps) {
        if(newProps.id !== this.props.id) {
            this.setState({name: newProps.name, email: newProps.email, fieldsValid: this.validateFields(newProps.name, newProps.email)});
        }
    }

    validateFields() {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return {
            nameLength: this.state.name.length === 0,
            emailLength: this.state.email.length === 0,
            emailValid: !emailRegex.test(this.state.email.toLowerCase())
        };
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.props.id === -1) {
            this.props.createUser(this.state.name, this.state.email);
        } else {
            this.props.updateUser(this.props.id, this.state.name, this.state.email);
        }
        this.hideModal();
    }
    hideModal() {
        this.setState({name: '', email: '', touched: {user: false, email: false}});
        this.props.closeModal();
    }

    render () {
        let errors = this.validateFields();

        return (
            <ReactModal
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
                isOpen={this.props.show}
                contentLabel="User CRUD Modal"
                >
                <Form>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input className={this.state.touched.name && errors.nameLength ? "error" : ""} 
                                name="name"
                                type="text" 
                                value={this.state.name} 
                                onChange={this.handleNameChange}
                                onBlur={this.handleBlur('name')} />
                            <ErrorMessage message="Name is required!" shouldShow={this.state.touched.name && errors.nameLength} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input className={this.state.touched.email && (errors.emailLength || errors.emailValid) ? "error" : ""}
                                name="email"
                                type="text" 
                                value={this.state.email} 
                                onChange={this.handleEmailChange}
                                onBlur={this.handleBlur('email')} />        
                            <ErrorMessage message="Email is required!" shouldShow={this.state.touched.email && errors.emailLength} />
                            <ErrorMessage message="Email must be valid!" shouldShow={this.state.touched.email && errors.emailValid} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={4}>
                            <Button color="success" style={{width: "100%", margin: "0 auto"}} onClick={this.handleSubmit} disabled={Object.keys(errors).some(x => errors[x])}>Submit</Button>
                        </Col>
                        <Col sm={4}>
                            <Button color="danger" style={{width: "100%", margin: "0 auto"}} onClick={() => this.props.deleteUser(this.props.id)} disabled={this.props.id < 0}>Delete</Button>
                        </Col>
                        <Col sm={4}>
                            <Button color="primary" style={{width: "100%", margin: "0 auto"}} onClick={this.hideModal}>Close</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </ReactModal>
        )
    }
}

UserModalDialog.propTypes = {
   createUser: PropTypes.func.isRequired,
   updateUser: PropTypes.func.isRequired,
   deleteUser: PropTypes.func.isRequired,
   name: PropTypes.string,
   email: PropTypes.string,
   id: PropTypes.number,
   show: PropTypes.bool,
   closeModal: PropTypes.func.isRequired,
}

export default UserModalDialog;