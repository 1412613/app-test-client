import React, {Component} from 'react';
import {connect} from 'react-redux';
import { actDeleteProjectsRequest, toggleProjectEditingForm, actGetMemberOfProjectRequest } from "../actions";
import { Button, Table} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Project extends Component {
    deleteProject = () => {
        this.props.onDeleteProject(this.props._id);
    }
    toggleFormEditing = () =>{
        var {name, description, index, _id, members} = this.props;
        this.props.onToggleFormEditing(_id, name, description, members);
        this.props.onGetMemberOfProject(_id);
    }
    render(){
        var {name, description, index} = this.props;
        return(
            <tr onClick = {this.toggleFormEditing}>
                <th scope="row">{index}</th>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                    <Button className="mr-3" onClick = {this.deleteProject} color="danger"><FontAwesomeIcon icon="trash" /></Button>
                    {/* <Button color="info" onClick = {this.toggleFormEditing}><FontAwesomeIcon icon="info"/></Button> */}
                </td>
            </tr>
        )
    }
}

const mapDispathToProps = (dispatch) =>{
    return{
        onDeleteProject: (id) => {
            return dispatch(actDeleteProjectsRequest(id))
        },
        onToggleFormEditing: (id, name, description, members) =>{
            return dispatch(toggleProjectEditingForm(id, name, description, members))
        },
        onGetMemberOfProject: (id) => {
            return dispatch(actGetMemberOfProjectRequest(id));
        }
    }
}
export default connect(null, mapDispathToProps)(Project);