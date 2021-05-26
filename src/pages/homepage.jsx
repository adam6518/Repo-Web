import React, { Component } from 'react'
import { Button, ButtonGroup, Input } from 'reactstrap';
import './homepage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Homepage extends Component {

    state = {
        inputSearch: '',
        latest: [],
        popular: [],
        hasilSearch: []
    }

    onSearch = () => {

    }

    getLatestUpdate = () => {

    }

    getPopulartopics = () => {

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

                <div className="explore">
                    <h4>Explore the new ideas here</h4>
                    <ButtonGroup className="btn-group">
                        <Button onClick={this.onSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                        <Input className="round" placeholder="Search here..." />
                    </ButtonGroup>
                </div>

                <div className="row" id="updates">
                    <div className="col" id="latest">Latest Update</div>
                    <div className="col" id="popular">Popular Topic</div>

                </div>

                <div>
                    <h5 className="footer">Youth Science Club Senior High School X</h5>
                </div>
            </div>
        )
    }

}

export default Homepage