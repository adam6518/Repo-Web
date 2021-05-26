import React, { Component } from 'react'
import { Button, Input, ButtonGroup } from 'reactstrap';
import './managescientificpaper.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class Managescientifficpaper extends Component {

    state = {
        inputSearch: '',
        paperData: []
    }

    componentDidMount() {
        this.getDataPapers()
    }


    getDataPapers = () => {
        axios.get('url')
            .then(res => {
                this.setState({
                    paperData: res.data.data
                })
            })
    }

    deletePapers = (idPaper) => {
        axios.delete('url', {
            data: {
                idPaper: idPaper
            }
        }).then(res => {
            console.log(res.data.data);

            Swal.fire('Paper berhasil di hapus !', 'Berhasil', 'success')
            this.getDataUsers()
        })
    }

    onChangeSearch = (e) => {
        this.setState({
            inputSearch : e.target.value
        })
    }
    
    searchPapers = () => {
        axios.get(`url`, {
            params: {
                paperName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                paperData: res.data.data
            })
            console.log(this.state.paperData)
        })
    }

    renderPapers = () => {
        var angka = 0
        return this.state.paperData.map((paper) => {
            return (
                <div className="container mt-5">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">SPW ID</th>
                                <th scope="col">Upload Date</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Field</th>
                                <th scope="col">Topic</th>
                                <th scope="col">Competition</th>
                                <th scope="col">Placement</th>
                                <th scope="col">Abstract</th>
                                <th scope="col">Files</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{angka++}</th>
                                <td>{paper.paperId}</td>
                                <td>{paper.uploadDate}</td>
                                <td>{paper.title}</td>
                                <td>{paper.author}</td>
                                <td>{paper.field}</td>
                                <td>{paper.topic}</td>
                                <td>{paper.competition}</td>
                                <td>{paper.placement}</td>
                                <td>{paper.abstract}</td>
                                <td>{paper.files}</td>
                                <td>
                                    <Link to={'/editscientificpaper' + paper.paperId}>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </Link>
                                    <Button onClick={() => this.deleteCompetitions(paper.paperId)} className="mx-2 btn btn-danger">Delete</Button>
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
                    <h4 className="masterdatacompetition">Manage Scientific Paper</h4>
                </div>

                <div className="mt-5 container">
                    <Link to="/uploadscientificpaper">
                        <button className="btn btn-outline-dark">Add New Data</button>
                    </Link>
                    <ButtonGroup className="btn-group ml-3">
                        <Button onClick={this.searchPapers}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                        <Input onChange={this.onChangeSearch} value={this.state.inputSearch} className="round" placeholder="Search here..." />
                    </ButtonGroup>
                </div>

                <div className="container">
                    {this.renderPapers()}
                </div>
            </div>
        )
    }

}

export default Managescientifficpaper