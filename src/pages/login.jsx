import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../pages/login.css'
import Swal from 'sweetalert2'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {

    state = {
        inputUsername: '',
        inputPassword: ''
    }

    onChangeUsername = (e) => {
        this.setState({
            inputUsername : e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            inputPassword : e.target.value
        })
    }

    onBtnLogin = () => {
        
    }

    render() {
        return (
            <div className="container card">
                <Form className="form-login" onSubmit={this.onBtnLogin}>
                    <h3 className="headline-login">Login to Repository</h3>
                    <FormGroup row>
                        <Label>Username</Label>
                        <Col sm={10}>
                            <Input onChange={this.onChangeUsername} value={this.state.inputUsername} id="exampleEmail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Password</Label>
                        <Col sm={10}>
                            <Input onChange={this.onChangePassword} value={this.state.inputPassword} type="password" id="examplePassword" />
                        </Col>
                    </FormGroup>
                    <Link to="/homepage">
                        <Button type="submit" className="button-login">Login</Button>
                    </Link>
                </Form>
            </div>
        )
    }
}

export default Login