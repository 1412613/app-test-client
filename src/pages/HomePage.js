import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

import { actFetchProjectsRequest } from "../actions/index";

import AddingProjectForm from '../component/AddingProjectForm';
import ProjectEditing from './../component/ProjectEditing';
import ProjectList from './../component/ProjectList';
import Header from './../component/partial/Header';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    titleStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
    render() {
        return (
            <div className="home-page">
                <Header/>
                <div className="container">
                    <div style = {this.titleStyle}>
                        <h1 className="text-center text-info" >HELLO</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onFetchProjects: () => {
            dispatch(actFetchProjectsRequest());
        }
    }
}


export default connect(null, mapDispatchToProps)(HomePage);