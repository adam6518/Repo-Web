import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import '../pages/login.css'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { onLoginUser } from '../redux/action'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        inputUsername: '',
        inputPassword: ''
    }

    onBtnLogin = () => {
        let username = this.state.inputUsername
        let password = this.state.inputUsername
        this.props.onLoginUser(username, password)
    }

    render() {
        if (!this.props.user_name) {
            return (
                <div className="container card">
                    <Form className="form-login">
                        <h3 className="headline-login">Login to Repository</h3>
                        <FormGroup row>
                            <Label for="exampleEmail">Username</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputUsername: e.target.value })} type="email" name="email" id="exampleEmail" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword">Password</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputPassword: e.target.value })} type="password" name="password" id="examplePassword" />
                            </Col>
                        </FormGroup>
                        <Button onClick={this.onBtnLogin} className="button-login">Login</Button>
                    </Form>
                </div>
            )
        } else {
            Swal.fire('Anda sudah login')
            return (
                < Redirect to='/' />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user_name: state.auth.username
    }
}

export default connect(mapStateToProps, { onLoginUser })(Login)