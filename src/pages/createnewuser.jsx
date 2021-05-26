import React, { Component } from 'react'
import './createnewuser.css'
import {  Form, FormGroup, Label, Input, Col } from 'reactstrap';
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Createnewuser extends Component {

    state = {
        inputUsername: '',
        inputPassword: '',
        role: ''
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

    onChangeRole = (e) => {
        this.setState({
            role : e.target.value
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputUsername || !this.state.inputPassword || !this.state.role
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.role && this.state.inputPassword && this.state.inputUsername) {
                var param = {
                    username: this.state.inputUsername,
                    password: this.state.inputPassword,
                    role: this.state.role
                }
                axios({
                    method: 'POST',
                    url: 'http://localhost:6773/users/register',
                    data: param

                })
                .then(res => {
                    if (res.data.data.status === '200') {
                        Swal.fire('Registered!', res.data.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Account has been registered', 'success')
            }
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light" id="nav1">
                    <div id="logo">
                        <img alt="Logo" className="gambar" />
                        <span className="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav2">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active mx-3" to="/homepage">Home</Link>
                                <Link className="nav-link active mx-3" to="/manageuser">Manage User</Link>
                                <Link className="nav-link active mx-3" to="/managemasterdata">Manage Master Data</Link>
                                <Link className="nav-link active mx-3" to="/managescientificpaper">Manage Scienttific Paper</Link>
                                <Link className="nav-link active mx-3" to="/browsecollection">Browse Collection</Link>
                                <Link className="nav-link active mx-3" to="/report">Report</Link>

                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                    <div className="hello">
                        <h6>Hello, Admin</h6>
                        <button className="btn btn-dark" id="btn-logout">Log Out</button>
                    </div>
                </nav>

                <div className="mt-5">
                    <h4 className="manageuser">Manage User</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login">Create New User</h3>
                        <FormGroup row>
                            <Label className="col">Username</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeUsername} value={this.state.inputUsername} id="example" placeholder="input username" />
                                
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Password</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangePassword} value={this.state.inputPassword} type="password" id="example" placeholder="input password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Role</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.role}
                                    onChange={this.onChangeRole} >
                                    {/* <option selected>Select</option> */}
                                    <option value="admin">Admin</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }

}

export default Createnewuser