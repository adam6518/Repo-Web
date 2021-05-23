import React, { Component } from 'react'
import './manageuser.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup, Nav } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'

class Manageuser extends Component {

    state = {
        inputSearch: '',
        userData: []
    }

    componentDidMount() {
        this.getDataUsers()
    }


    getDataUsers = () => {
        axios.get('http://localhost:6773/users/users_data')
            .then(res => {
                this.setState({
                    userData: res.data
                })
            })
    }

    deleteUsers = (idUser) => {
        axios.delete('http://localhost:6773/users/delete_user', {
            data: {
                idUser: idUser
            }
        }).then(res => {
            console.log(res.data);

            if (res.data.message == 'Anda tidak dapat menhapus admin') {
                Swal.fire('Anda tidak dapat menghapus admin !', 'Hati - hati', 'warning')
                this.getDataUsers()
            } else {
                Swal.fire('User berhasil di hapus !', 'Berhasil', 'success')
                this.getDataUsers()
            }
        })
    }

    searchUsers = () => {
        axios.get(`http://localhost:6773/users/findUser/`, {
            params: {
                userName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                userData: res.data
            })
            console.log(this.state.userData)
        })
    }

    renderUser = () => {
        return this.state.userData.map((user) => {
            return (
                <div className="container mt-5">
                    <table class="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">User ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>
                                    <NavLink to='/edituser'>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </NavLink>
                                    <Button onClick={() => { this.deleteUsers(user.id) }} className="mx-2 btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
    }

    render() {
        if (this.props.user_role === 'admin') {
            return (
                <div>
                    <nav class="navbar navbar-light bg-light" id="nav1">
                        <div id="logo">
                            <img alt="Logo" className="gambar" />
                            <span class="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-light" id="nav2">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active mx-3" href="#">Home</a>
                                    <a class="nav-link active mx-3" href="#">Manage User</a>
                                    <a class="nav-link active mx-3" href="#">Manage Master Data</a>
                                    <a class="nav-link active mx-3" href="#">Manage Scienttific Paper</a>
                                    <a class="nav-link active mx-3" href="#">Browse Collection</a>
                                    <a class="nav-link active mx-3" href="#">Report</a>

                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                        <div className="hello-admin">
                            <h6>Hello, Admin</h6>
                            <button className="btn btn-dark" id="btn-logout">Log Out</button>
                        </div>
                    </nav>

                    <div className="mt-5">
                        <h4 className="manageuser">Manage User</h4>
                    </div>

                    <div className="mt-5 container">
                        <NavLink to='/createnewuser'>
                            <button className="btn btn-outline-dark">Create New User</button>
                        </NavLink>
                        <ButtonGroup className="btn-group ml-3">
                            <Button onClick={this.searchUsers}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Button>
                            <Input className="round" placeholder="Search here..." />
                        </ButtonGroup>
                    </div>

                    <div className="container">
                        {this.renderUser()}
                    </div>

                </div>
            )
        } else {
            <h1 className="text-center mt-5">
                Halaman tidak dapat diakses
            </h1>
        }
    }
}

const mapStateToProps = state => {
    return {
        user_role: state.auth.role,
        user_id: state.auth.id
    }
}

export default connect(mapStateToProps)(Manageuser)