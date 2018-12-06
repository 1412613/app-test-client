import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table, ModalFooter, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AddMemberToProjectForm from './AddMemberToProjectForm';

import { actEditProject,actRemoveMemberFromProjectRequest, toggleProjectEditingForm } from "../actions/index";

class ProjectEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            project: {
                description: '',
                name: '',
                descript:'',
                _id: '',
                members: []
            }
        }
    }

    componentDidMount = () => {
        var { isOpen, Project } = this.props;
        this.setState({
            modal: isOpen % 2 === 0 ? true : false,
            project: Project
        });
    }


    componentWillReceiveProps = (nextProps) => {
        var { isOpen, Project } = nextProps;
        this.setState({
            modal: isOpen % 2 === 0 ? true : false,
            project: Project
        });
    }

    removeMember = (e) => {
        var { _id } = this.state.project;
        this.props.onRemoveMemberFromProject(_id, e.currentTarget.id);
    }

    showMembers = () => {
        var { members } = this.state.project;
        if (members.length === 0) {
            return null;
        }
        var arr = members.map((member, index) => {
            let { _id, name, email } = member;
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td><Button id={_id} color="danger" onClick={this.removeMember}><FontAwesomeIcon icon="trash" /></Button></td>
                </tr>
            )
        });
        return arr;
    }

    toggle = () => {
        this.props.onToggle();
    }
    

    render() {
        var {project} = this.state;
        var {name, _id, description, members} = project;
        return (
            <Form>
                <FormGroup>
                    <Label className="font-weight-bold">Project id</Label>
                    <Input disabled type="text" name="id" value={_id} />
                </FormGroup>
                <FormGroup>
                    <Label className="font-weight-bold">Project name</Label>
                    <p className="lead" type="text" name="name">{name}</p>
                </FormGroup>
                <FormGroup>
                    <Label className="font-weight-bold">Description</Label>
                    <p className="lead" type="text" name="description">{description}</p>
                </FormGroup>
                <h5 className="text-info text-center">MEMBERS LIST</h5>
                <AddMemberToProjectForm
                    projectId = {_id}
                    userIds = {members}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{height: '400px'}}>
                        {this.showMembers()}
                    </tbody>
                </Table>
            </Form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isOpen: state.ProjectFormEditing.isOpen,
        Project: state.ProjectFormEditing.project
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onEditingProject: (id, name, description, members) => {
            dispatch(actEditProject(id, name, description, members));
        },
        onToggle: () => {
            dispatch(toggleProjectEditingForm())
        },
        onRemoveMemberFromProject: (projectId, userId) =>{
            dispatch(actRemoveMemberFromProjectRequest(projectId, userId))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditing);