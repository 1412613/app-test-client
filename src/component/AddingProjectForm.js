import React, { Component } from 'react';
import { connect } from "react-redux";

import { actAddNewProjectRequest } from "../actions/index"
import { Button, FormFeedback, ModalFooter, ModalHeader, ModalBody, Modal, FormGroup, Label, Input } from "reactstrap";

class AddingProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            description: '',
            descriptionFeedBack: '',
            nameFeedBack: ''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        });
        
    }
    onSubmit = (e) => {
        var {name, description} = this.state;
        if(name.length > 0 && description.length > 0){
            this.props.onAddNewProject(name, description);
            this.setState({
                modal: false
            });
        }else{
            if(this.state.name === ''){
                this.setState({
                    nameFeedBack: 'name is invalid'
                });
            }
            if(this.state.descriptionFeedBack === ''){
                this.setState({
                    descriptionFeedBack: 'description is invalid'
                })
            }
        }
        
    }

    render() {
        var {modal, description, name, descriptionFeedBack, nameFeedBack} = this.state;
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Add new</Button>
                <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add new project</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="exampleEmail">Project name</Label>
                            <Input type="text" name="name" id="exampleEmail" onChange = {this.onChange} value={name} placeholder="typing project name" invalid = {nameFeedBack === ''?false:true}/>
                            <FormFeedback>{nameFeedBack}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Description</Label>
                            <Input type="text" name="description" onChange = {this.onChange} value = {description} id="examplePassword" placeholder="typing project's description" invalid = {descriptionFeedBack === ''?false:true}/>
                            <FormFeedback>{descriptionFeedBack}</FormFeedback>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick = {this.onSubmit} color="primary">Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewProject: (name, description) => {
            dispatch(actAddNewProjectRequest(name, description))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddingProjectForm);