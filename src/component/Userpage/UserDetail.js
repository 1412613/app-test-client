import React, {Component} from 'react';
import { connect } from "react-redux";

import { Button, Table, FormGroup, Label, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {actDeleteUserRequest, actRemoveMemberFromProjectRequest} from '../../actions/index';

// import Project  from './Project';

class UserDetail extends Component{
    constructor(props){
        super(props);
    }

    deleteProject = (e) => {
        var id = e.currentTarget.id;
        var {_id} = this.props.User;
        this.props.onRemoveMemberFromProject(id, _id);
    }

    showProjects = () => {
        var {projects} = this.props.User;
        var arr = [];
        arr = projects.map((project, index) => {
            var {_id, name, description} = project;
            return (
                <tr key = {index}>
                    <th scope="row">{index}</th>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>
                        <Button onClick = {this.deleteProject} color="danger" id = {_id}><FontAwesomeIcon icon="times" /></Button>
                    </td>
                </tr>
            )
        });
        return arr;
    }

    render(){
        var {_id, name, email} = this.props.User;
        return(
            <div>
               <FormGroup>
                    <Label className="font-weight-bold">User id</Label>
                    <Input disabled type="text" name="id" value={_id} />
                </FormGroup>
                <FormGroup>
                    <Label className="font-weight-bold">User name</Label>
                    <p className="lead" type="text">{name}</p>
                </FormGroup>
                <FormGroup>
                    <Label className="font-weight-bold">Email</Label>
                    <p className="lead" type="text">{email}</p>
                </FormGroup>
                <h5 className="text-info text-center">PROJECTS LIST</h5>
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
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        User: state.UserDetail,
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onRemoveMemberFromProject: (projectId, UserId) => {
            dispatch(actRemoveMemberFromProjectRequest(projectId, UserId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);


