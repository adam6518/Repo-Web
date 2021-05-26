import React, { Component } from 'react'
import { Button, Form, Input, ButtonGroup } from 'reactstrap';
import './masterdatacompetition.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Masterdatacompetition extends Component {

    state = {
        inputSearch: '',
        competitionData: []
    }

    componentDidMount() {
        this.getDataCompetitions()
    }

    onChangeSearch = (e) => {
        this.setState({
            inputSearch: e.target.value
        })
    }

    getDataCompetitions = () => {
        axios.get('url')
            .then(res => {
                this.setState({
                    competitionData: res.data.data
                })
            })
    }

    deleteCompetitions = (idCompetition) => {
        axios.delete('url', {
            data: {
                idCompetition: idCompetition
            }
        }).then(res => {
            console.log(res.data.data);

            Swal.fire('Competition berhasil di hapus !', 'Berhasil', 'success')
            this.getDataUsers()
        })
    }

    searchCompetitions = () => {
        axios.get(`url`, {
            params: {
                competitionName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                competitionData: res.data.data
            })
            console.log(this.state.competitionData)
        })
    }

    renderCompetitions = () => {
        var angka = 0
        return this.state.competitionData.map((competition) => {
            return (
                <div className="container mt-5">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Competition ID</th>
                                <th scope="col">Competition Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Location</th>
                                <th scope="col">Scales</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{angka++}</th>
                                <td>{competition.competitionId}</td>
                                <td>{competition.competitionName}</td>
                                <td>{competition.date}</td>
                                <td>{competition.location}</td>
                                <td>{competition.scales}</td>
                                <td>
                                    <Link to={'/editcompetition' + competition.competitionId}>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </Link>
                                    <Button onClick={() => { this.deleteCompetitions(competition.competitionId) }} className="mx-2 btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
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
                    <h4 className="masterdatacompetition">Master Data Competition</h4>
                </div>

                <div className="mt-5 container">
                    <Link to="/addnewcompetition">
                        <button className="btn btn-outline-dark">Add New Data</button>
                    </Link>
                    <Form onSubmit={this.searchCompetitions}>
                        <ButtonGroup className="btn-group ml-3">
                            <Button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Button>
                            <Input onChange={this.onChangeSearch} value={this.state.inputSearch} className="round" placeholder="Search here..." />
                        </ButtonGroup>
                    </Form>
                </div>

                <div className="container">
                    {this.renderCompetitions()}
                </div>
            </div>
        )
    }
}

export default Masterdatacompetition