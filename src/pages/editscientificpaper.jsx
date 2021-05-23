import React, { Component } from 'react'
import './uploadscientificpaper.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'
import DatePicker from 'react-date-picker';

class Editscientificpaper extends Component {

    constructor(props) {
        super(props);
        this.onChangeDate = this.ondateonChangeDate.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeAdvisor = this.onChangeAdvisor.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeCompetition = this.onChangeCompetition.bind(this);
        this.onChangePlacement = this.onChangePlacement.bind(this);
        this.onChangeAbstract = this.onChangeAbstract.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            inputDate: new Date(),
            inputTitle: '',
            inputAuthor: [],
            author: '',
            inputAdvisor: [],
            advisor: '',
            inputField: [],
            field: '',
            inputTopic: [],
            topic: '',
            inputCompetition: [],
            competition: '',
            inputPlacement: '',
            inputAbstract: '',
            inputFile: null
        }
    }

    componentDidMount() {
        axios.get('url')
            .then(res => {
                this.setState({
                    
                }).catch(err => {
                    console.log(err);
                })
            })
        axios.get('url')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        competitions: res.data.map(competition => competition.competitionname)
                    })
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    onChangeCompetitionName(e) {
        this.setState({
            inputCompetitionName: e.target.value
        })
    }
    onChangeDate(e) {
        this.setState({
            inputDate: e
        })
    }

    onChangeOrganizer(e) {
        this.setState({
            inputOrganizer: e.target.value
        })
    }

    onChangeLocation(e) {
        this.setState({
            inputLocation: e.target.value
        })
    }

    onChangeScales(e) {
        this.setState({
            inputScales: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const competitions_data = {
            competitionname: this.state.inputCompetitionName,
            date: this.state.inputDate,
            organizer: this.state.inputOrganizer,
            location: this.state.inputLocation,
            scales: this.state.inputScales
        }
        console.log(users_data)
        axios.put('url')
            .then(res => console.log(res.data));
    }

    render() {

    }
}

const mapStateToProps = state => {
    return {
        user_role: state.auth.role,
    }
}

export default connect(mapStateToProps, { onLogoutUser })(Editscientificpaper)