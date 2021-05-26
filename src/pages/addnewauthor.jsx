import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './addnewauthor.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Addnewauthor extends Component {

    state = {
        inputStudentName: '',
        inputNISN: '',
        major: '',
        gender: ''
    }

    onChangeStudentName = (e) => {
        this.setState({
            inputStudentName : e.target.value
        })
    }

    onChangeNISN = (e) => {
        this.setState({
            inputNISN : e.target.value
        })
    }

    onChangeMajor = (e) => {
        this.setState({
            major : e.target.value
        })
    }

    onChangeGender = (e) => {
        this.setState({
            gender : e.target.value
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputStudentName || !this.state.inputNISN || !this.state.major || !this.state.gender
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputStudentName && this.state.inputNISN && this.state.major && this.state.gender) {
                axios.post('url', {
                    studentName: this.state.inputStudentName,
                    nisn: this.state.inputNISN,
                    major: this.state.major,
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
                Swal.fire('Registered!', 'Author has been registered', 'success')
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
                    <h4 className="manageuser">Master Data Author</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login my-5">Add New Author</h3>
                        <FormGroup row>
                            <Label className="col" id="studentname">Student Name</Label>
                            <Col sm={10}>
                                <Input value ={this.state.inputStudentName} onChange={this.onChangeStudentName} id="example" placeholder="input student name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">NISN</Label>
                            <Col sm={10}>
                                <Input value ={this.state.inputNISN} onChange={this.onChangeNISN} id="example" placeholder="input NISN" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Major</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.major}
                                    onChange={this.onChangeMajor} >
                                    {/* <option selected>Select</option> */}
                                    <option value="ipa">IPA</option>
                                    <option value="ips">IPS</option>
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Gender</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.gender}
                                    onChange={this.onChangeGender} >
                                    {/* <option selected>Select</option> */}
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

export default Addnewauthor