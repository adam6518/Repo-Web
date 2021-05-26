import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './addnewscales.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Addnewscales extends Component {

    state = {
        inputScalesName: ''
    }

    onChangeScales = (e) => {
        this.setState({
            inputScalesName : e.target.value
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputScalesName
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputScalesName) {
                axios.post('url', {
                    scalesname: this.state.inputScalesName
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.data.message, 'success')
                    } else if (res.data.data.status === '500') {
                        Swal.fire('invalid!', res.data.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Scales has been registered', 'success')
            }
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light" id="nav1">
                    <div id="logo">
                        <img alt="Logo" classNameName="gambar" />
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
                    <h4 className="manageuser">Master Data Scales</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login my-5">Add New Scales</h3>
                        <FormGroup row>
                            <Label className="col" id="scalesname">Scales Name</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeScales} value={this.state.inputScalesName} id="example" placeholder="input scales name" />
                            </Col>
                        </FormGroup>
                    </Form>
                    <div className="button-create my-5">
                        <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                        <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addnewscales