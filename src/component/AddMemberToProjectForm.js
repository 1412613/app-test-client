import React, { Component } from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { actFetchUsersRequest, actAddMemberToProjectRequest, getUsersNotBeInRequest } from "../actions/index"
import { Button, ModalHeader, ModalBody, Modal, Table } from "reactstrap";

class AddMemberToProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            projectId: this.props.projectId
        };
        this.toggle = this.toggle.bind(this);
    }
    componentWillReceiveProps = (nextProps) => {
        var {projectId, userIds} = nextProps;
        this.setState({
            projectId,
            userIds
        })
    }


    toggle() {
        this.props.onFetchUsers(this.state.projectId);
        this.setState({
          modal: !this.state.modal
        });
    }
    addUserIntoProject = (e) => {
        var {projectId} = this.state;
        var userId = e.currentTarget.id;
        this.props.onAddMemberToProject(projectId, userId)
    }

    showMembers = () => {
        var {Users} = this.props;
        if(Users.length === 0){
            return [];
        }
        var arr = [];
        arr = Users.map((user, index) => {
            var {_id, name, email} = user;
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td><Button id={_id} color="success" onClick={this.addUserIntoProject}><FontAwesomeIcon icon="plus" /></Button></td>
                </tr>
            )
        })
        return arr;
    }
    tableStyle = {
        
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Add member</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add member to project</ModalHeader>
                    <ModalBody>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style = {this.tableStyle}>
                            {this.showMembers()}
                        </tbody>
                    </Table>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        Users: state.UsersNotBeInProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchUsers: (usersIds) => {
            dispatch(getUsersNotBeInRequest(usersIds));
        },
        onAddMemberToProject: (projectId, userId) => {
            dispatch(actAddMemberToProjectRequest(projectId, userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMemberToProjectForm);