import React, { Component } from 'react'
import './createnewuser.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import Swal from 'sweetalert2'
import axios from 'axios'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Createnewuser extends Component {

    state = {
        inputUsername: '',
        inputPassword: '',
        role: ''
    }

    onBtnRegister = () => {
        if (
            !this.state.inputUsername || !this.state.inputPassword || !this.state.role
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.role && this.state.inputPassword && this.state.inputUsername) {
                axios.post('http://localhost:6773/users/register', {
                    username: this.state.inputUsername,
                    password: this.state.inputPassword,
                    role: this.state.role
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Account has been registered', 'success')
            }
        }
    }

    render() {
        if (this.props.user_role !== 'admin') {
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
                                    <a className="nav-link active mx-3" href="#">Home</a>
                                    <a className="nav-link active mx-3" href="#">Manage User</a>
                                    <a className="nav-link active mx-3" href="#">Manage Master Data</a>
                                    <a className="nav-link active mx-3" href="#">Manage Scienttific Paper</a>
                                    <a className="nav-link active mx-3" href="#">Browse Collection</a>
                                    <a className="nav-link active mx-3" href="#">Report</a>

                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                        <div className="hello-admin">
                            <h6>Hello, Admin</h6>
                            <button className="btn btn-dark" id="btn-logout">Log Out</button>
                        </div>
                    </nav>

                    <div className="mt-5">
                        <h4 className="manageuser">Manage User</h4>
                    </div>

                    <div className="container card" id="form">
                        <Form className="form-create container">
                            <h3 className="headline-login">Create New User</h3>
                            <FormGroup row>
                                <Label for="exampleEmail" className="col">Username</Label>
                                <Col sm={10}>
                                    <Input onChange={e => this.setState({ inputUsername: e.target.value })} type="email" name="email" id="example" placeholder="input username" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" className="col">Password</Label>
                                <Col sm={10}>
                                    <Input onChange={e => this.setState({ inputPassword: e.target.value })} type="password" name="password" id="example" placeholder="input password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example" className="col">Role</Label>
                                <Col sm={10}>
                                    <select className="form-select"
                                        value={this.state.role}
                                        onChange={e => this.setState({ role: e.target.value })} >
                                        {/* <option selected>Select</option> */}
                                        <option value="admin">Admin</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="student">Student</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <div className="button-create my-5">
                                <button onChange={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
                                <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            </div>
                        </Form>
                    </div>
                </div>
            )
        } else {
            return (
                <h1 className="text-center mt-5">
                    Halaman tidak dapat diakses
                </h1>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user_role: state.auth.role
    }
}

export default connect(mapStateToProps)(Createnewuser)