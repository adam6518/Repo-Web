import React, { Component } from 'react'
import './addnewadvisor.css'
import { Form, FormGroup, Label, Input, Col, Form } from 'reactstrap';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Addnewadvisor extends Component {

    state = {
        inputTeacherName: '',
        inputNUPTK: '',
        gender: ''
    }

    onChangeTeacherName = (e) => {
        this.setState({
            inputTeacherName : e.target.value
        })
    }

    onChangeNUPTK = (e) => {
        this.setState({
            inputNUPTK : e.target.value
        })
    }

    onChangeGender = (e) => {
        this.setState({
            gender : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const advisors_data = {
            teacherName : this.state.inputTeacherName,
            nuptk : this.state.inputNUPTK,
            gender : this.state.gender
        }
        axios.post('url', advisors_data).then(res => )
    }

    onBtnRegister = () => {
        if (
            !this.state.inputTeacherName || !this.state.inputNUPTK || !this.state.gender
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.gender && this.state.inputNUPTK && this.state.inputTeacherName) {
                axios.post('http://localhost:6773/users/register', 
                 {
                    teachername: this.state.inputTeacherName,
                    nuptk: this.state.inputNUPTK,
                    gender: this.state.gender
                }).then(res => {
                    if (res.data.data.status === '200') {
                        Swal.fire('Registered!', res.data.data.message, 'success')
                    } else if (res.data.data.status === '500') {
                        Swal.fire('invalid!', res.data.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Advisor has been registered', 'success')
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
                    <h4 className="manageuser">Master Data Advisor</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login my-5">Add New Advisor</h3>
                        <FormGroup row>
                            <Label className="col" id="teachername">Teacher Name</Label>
                            <Col sm={10}>
                                <Input value ={this.state.inputTeacherName} onChange={this.onChangeTeacherName} id="example" placeholder="input teacher name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">NUPTK</Label>
                            <Col sm={10}>
                                <Input value={this.state.inputNUPTK} onChange={this.onChangeNUPTK} id="example" placeholder="input NUPTK" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Gender</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.gender}
                                    onChange={this.onChangeGender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Addnewadvisor