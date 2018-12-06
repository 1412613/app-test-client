import React, {Component} from 'react';
import { Button, Table} from "reactstrap";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {actDeleteUserRequest, getUserDetailRequest} from '../../actions/index';

// import Project  from './Project';

class UsersList extends Component{
    constructor(props){
        super(props);
    }

    deleteUser = (e) => {
        var id = e.currentTarget.id;
        this.props.onDeleteUser(id);
    }

    showUserInfo = (e) => {
        var id = e.currentTarget.id;
        this.props.onGetMemberOfProject(id);
    }
    showUsers = () => {
        var { Users } = this.props;
        if (Users.length === 0) {
            return null;
        }
        var arr = [];
        arr = Users.map((user, index) => {
            let { name, email, _id } = user;
            return (
                <tr onClick = {this.showUserInfo} key = {index} id = {_id}>
                    <th scope="row">{index}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                        <Button onClick = {this.deleteUser} color="danger" id = {_id}><FontAwesomeIcon icon="trash" /></Button>
                    </td>
                </tr>
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
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showUsers()}
                </tbody>
            </Table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Users: state.Users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onDeleteUser: (id) => {
            dispatch(actDeleteUserRequest(id));
        },
        onGetMemberOfProject: (id) => {
            dispatch(getUserDetailRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);


