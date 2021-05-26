import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './addnewtopic.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Addnewtopic extends Component {

    state = {
        inputTopicName: ''
    }

    onChangeTopic = (e) => {
        this.setState({
            inputTopicName : e.target.value
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputTopicName
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputTopicName) {
                axios.post('url', {
                    topicname: this.state.inputTopicName
                }).then(res => {
                    if (res.data.data.status === '200') {
                        Swal.fire('Registered!', res.data.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Topic has been registered', 'success')
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

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                    <div className="hello">
                        <h6>Hello, Admin</h6>
                        <button className="btn btn-dark" id="btn-logout">Log Out</button>
                    </div>
                </nav>

                <div className="mt-5">
                    <h4 className="manageuser">Master Data Topic</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login my-5">Add New Topic</h3>
                        <FormGroup row>
                            <Label className="col" id="topicname">Topic Name</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeTopic} value={this.state.inputTopicName} id="example" placeholder="input topic name" />
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

export default Addnewtopic  