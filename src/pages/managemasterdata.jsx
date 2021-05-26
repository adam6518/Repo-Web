import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Nav
} from 'reactstrap';
import './managemasterdata.css'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Managemasterdata extends Component {
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
                    <h4 className="manageuser">Manage Master Data</h4>
                </div>

                <div className="row">
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="author">
                                <Link to="/masterdataauthor">Author</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="advisor">
                                <Link to="/masterdataadvisor">Advisor</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="field">
                                <Link to="/masterdatafield">Field</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="topic">
                                <Link to="/masterdatatopic">Topic</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="scales">
                                <Link to="/masterdatascales">Scales</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="competition">
                                <Link to="/masterdatacompetition">Competition</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Managemasterdata