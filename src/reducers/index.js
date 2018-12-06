import { combineReducers } from "redux";

import Projects from './projects';
import ProjectFormEditing from './projectFormEditing';
import Users from './Users';
import UserDetail from './UserDetail';
import UsersNotBeInProject from './UsersNotBeInProject'
import EmailChecking from './EmailChecking';

const appReducers = combineReducers({
    Projects,
    ProjectFormEditing,
    Users,
    UserDetail,
    UsersNotBeInProject,
    EmailChecking
});

export default appReducers;