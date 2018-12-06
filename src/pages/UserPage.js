import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

import { actFetchUsersRequest } from "../actions/index";

import UsersList from '../component/Userpage/UsersList';
import AddingNewUserForm from '../component/Userpage/AddingNewUserForm';
import UserDetail from '../component/Userpage/UserDetail';
import Header from '../component/partial/Header';



class UserPage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount = () => {
        this.props.onFetchUsers();
    }
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <h2 className="text-center text-success">USERS MANAGEMENT</h2>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6">
                            <h3 className="text-center text-primary">Users list</h3>
                            <AddingNewUserForm/>
                            <UsersList/>
                        </div>
                        <div className="col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6">
                            <h3 className="text-center text-primary">Users detail</h3>
                            <UserDetail/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onFetchUsers: () => {
            dispatch(actFetchUsersRequest());
        }
    }
}

export default connect(null, mapDispatchToProps)(UserPage);