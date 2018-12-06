import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

import { actFetchProjectsRequest } from "../actions/index";

import AddingProjectForm from '../component/AddingProjectForm';
import ProjectEditing from '../component/ProjectEditing';
import ProjectList from '../component/ProjectList';
import Header from '../component/partial/Header';


class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectModal: false
        }
    }

    componentDidMount = () =>{
        this.props.onFetchProjects();
    }

    render() {
        return (
            <div className="project-page">
                <Header/>
                <div className="container">
                    <h1 className="text-center">QUẢN LÝ</h1>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h3 className="text-center">MANAGE PROJECTS LIST</h3>
                            <AddingProjectForm/>
                            <ProjectList/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <h3 className="text-center">PROJECT DETAIL</h3>
                            <ProjectEditing/>
                        </div>
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


export default connect(null, mapDispatchToProps)(DashboardPage);