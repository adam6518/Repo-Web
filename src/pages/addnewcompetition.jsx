import React, { Component } from 'react'
import './addnewcompetition.css'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker';

class Addnewcompetition extends Component {

    state = {
        inputCompetitionName: '',
        inputDate: new Date(),
        inputOrganizer: '',
        inputLocation: '',
        inputScales: ''
    }

    onChangeCompetitionName = (e) => {
        this.setState({
            inputCompetitionName: e.target.value
        })
    }

    handleDate = (e) => {
        console.log(e);
        this.setState({
            inputDate: e
        })
    }

    onChangeOrganizer = (e) => {
        this.setState({
            inputOrganizer: e.target.value
        })
    }

    onChangeLocation = (e) => {
        this.setState({
            inputLocation: e.target.value
        })
    }

    onChangeScales = (e) => {
        this.setState({
            inputScales: e.target.value
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputCompetitionName || !this.state.inputDate || !this.state.inputLocation || !this.state.inputOrganizer
            || !this.state.inputScales
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputCompetitionName && this.state.inputDate && this.state.inputLocation && this.state.inputOrganizer
                && this.state.inputScales) {
                axios.post('url', {
                    competitionname: this.state.inputCompetitionName,
                    date: this.state.inputDate,
                    location: this.state.inputLocation,
                    organizer: this.state.inputOrganizer,
                    scales: this.state.inputScales
                }).then(res => {
                    if (res.data.data.status === '200') {
                        Swal.fire('Registered!', res.data.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Competition has been registered', 'success')
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
                    <h4 className="manageuser">Master Data Competition</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onBtnRegister}>
                        <h3 className="headline-login my-5">Add New Competition</h3>
                        <FormGroup row>
                            <Label className="col" id="studentname">Competition Name</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeCompetitionName} value={this.state.inputCompetitionName} id="example" placeholder="input student name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Date</Label>
                            <Col sm={10}>
                                <DatePicker value={this.state.inputDate} onChange={this.handleDate} format="y-MM-dd" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Organizer</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeOrganizer} value={this.state.inputOrganizer} id="example" placeholder="input Organnizer" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Location</Label>
                            <Col sm={10}>
                                <Input onChange={this.onChangeLocation} value={this.state.inputLocation} id="example" placeholder="input Location" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Scales</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.inputScales}
                                    onChange={this.onChangeScales} >
                                    {
                                        this.state.inputScales.map(scales => {
                                            return <option key={scales} value={scales}>{scales}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="reset" type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Addnewcompetition