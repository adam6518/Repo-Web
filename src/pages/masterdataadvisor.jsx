import React, { Component } from 'react'
import { Button, Input, ButtonGroup, Form } from 'reactstrap';
import './masterdataadvisor.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Masterdataadvisor extends Component {

    state = {
        inputSearch: '',
        advisorData: []
    }

    componentDidMount() {
        this.getDataAdvisors()
    }

    onChangeSearch = (e) => {
        this.setState({
            inputSearch: e.target.value
        })
    }

    getDataAdvisors = () => {
        axios.get('url')
            .then(res => {
                this.setState({
                    advisorData: res.data.data
                })
            })
    }

    deleteAdvisors = (idAdvisor) => {
        axios.delete('url', {
            data: {
                idAdvisor: idAdvisor
            }
        }).then(res => {
            console.log(res.data.data);

            Swal.fire('Advisor berhasil di hapus !', 'Berhasil', 'success')
            this.getDataAdvisors()
        })
    }

    searchAdvisors = () => {
        axios.get(`url`, {
            params: {
                teacherName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                advisorData: res.data.data
            })
        })
    }

    renderAdvisors = () => {
        var angka = 0
        return this.state.advisorData.map((advisor) => {
            return (
                <div className="container mt-5">
                    <table class="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Author ID</th>
                                <th scope="col">Teacher Name</th>
                                <th scope="col">NUPTK</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{angka++}</th>
                                <td>{advisor.advisorId}</td>
                                <td>{advisor.teacherName}</td>
                                <td>{advisor.nuptk}</td>
                                <td>{advisor.gender}</td>
                                <td>
                                    <Link to={'/editadvisor' + advisor.advisorId}>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </Link>
                                    <Button onClick={() => { this.deleteAdvisors(advisor.advisorId) }} className="mx-2 btn btn-danger">Delete</Button>
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
                    <h4 className="masterdataadvisor">Master Data Advisor</h4>
                </div>

                <div className="mt-5 container">
                    <button className="btn btn-outline-dark">Add New Data</button>
                    <Form onSubmit={this.searchAdvisors}>
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
                    {this.renderAdvisors()}
                </div>
            </div>
        )
    }
}

export default Masterdataadvisor