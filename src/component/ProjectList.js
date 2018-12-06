import React, {Component} from 'react';
import { Button, Table} from "reactstrap";
import { connect } from "react-redux";
import {actEditProject} from '../actions/index';

import Project  from './Project';

class ProjectList extends Component{
    constructor(props){
        super(props);
    }
    showProjects = () => {
        var { Projects } = this.props;
        if (Projects.length === 0) {
            return null;
        }
        var arr = [];
        arr = Projects.map((project, index) => {
            let { name, description, _id, members } = project;
            return (
                <Project 
                    key = {index}
                    index = {index}
                    name = {name}
                    description = {description}
                    members = {members}
                    _id = {_id}
                />
            )
        })

        return arr;
    }
    render(){
        return(
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showProjects()}
                </tbody>
            </Table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Projects: state.Projects
    }
}
export default connect(mapStateToProps, null)(ProjectList);


