import React, { Component } from 'react';
import { connect } from "react-redux";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RollingIcon from "../../icon/rolling.svg";
import { actAddNewUserRequest, checkEmailRequest } from "../../actions/index"
import { Button, FormFeedback, ModalFooter, ModalHeader, ModalBody, Modal, FormGroup, Label, Input, InputGroupAddon, InputGroup } from "reactstrap";

class AddingUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            email: '',
            nameFeedBack: '',
            emailFeedBack: '',
            showLoadingIcon: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    componentWillReceiveProps = (nextProps) =>{
        var {EmailChecking} = nextProps;
        console.log(nextProps)
        if(EmailChecking){
            this.setState({
                showLoadingIcon: false
            })
        }
    }
    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        });
        if(name ==='email'){
            this.props.onCheckEmail(value);
            this.setState({
                showLoadingIcon: true
            })
            if(!this.validateEmail(value) || !this.props.EmailChecking){
                this.setState({
                    emailFeedBack: 'email is invalid'
                })
            }else{
                this.setState({
                    emailFeedBack: ''
                }) 
            }

        }
    }
    onSubmit = (e) => {
        var {name, email, nameFeedBack, emailFeedBack} = this.state;
        if(name.length > 0 && email.length > 0 && nameFeedBack === '' && emailFeedBack === ''){
            this.props.onAddNewUser(name, email);
            this.setState({
                modal: false
            });
        }else{
            if(this.state.name === ''){
                this.setState({
                    nameFeedBack: 'name is invalid'
                });
            }
            if(this.state.email === ''){
                this.setState({
                    emailFeedBack: 'email is invalid'
                })
            }
        }      
    }
    validateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true
        }
        return false;
    }
    showLoadingIcon = () =>{
        var {showLoadingIcon} = this.state;
        if(showLoadingIcon) return (<img className="w-100" src={RollingIcon}/>);
        return null;
    }

    render() {
        var {modal, email, name, emailFeedBack, nameFeedBack, showLoadingIcon} = this.state;
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Add new</Button>
                <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add new project</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>name</Label>
                            <Input type="text" name="name" id="exampleEmail" onChange = {this.onChange} value={name} placeholder="enter project name" invalid = {nameFeedBack === ''?false:true}/>
                            <FormFeedback>{nameFeedBack}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <InputGroup className="inp-mail-group">
                                <Input type="text" name="email" onChange = {this.onChange} value = {email} placeholder="enter project's description" invalid = {emailFeedBack === ''?false:true}/>
                                <InputGroupAddon addonType="append">{this.showLoadingIcon()}</InputGroupAddon>
                                <FormFeedback>{emailFeedBack}</FormFeedback>
                            </InputGroup>
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
const mapStateToProps = (state) =>{
    return {
        EmailChecking: state.EmailChecking
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewUser: (name, email) => {
            dispatch(actAddNewUserRequest(name, email))
        },
        onCheckEmail: (email) => {
            dispatch(checkEmailRequest(email));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingUserForm);