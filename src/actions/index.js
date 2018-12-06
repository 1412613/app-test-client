import * as Types from '../constant/actionTypes';
import apiCaller from '../unitls/ApiCaller';


export const actFetchProjectsRequest = () =>{
    return async (dispatch) =>{
        var result = await apiCaller('project/all', 'get', {});
        return dispatch(actFetchProjects(result));
    }
}
const actFetchProjects = (result) => {
    return {
        type: Types.FETCH_PROJECTS,
        result
    }
}

// delete a project
export const actDeleteProjectsRequest = (id) =>{
    return async (dispatch) =>{
        var result = await apiCaller('project', 'delete', {id});
        return dispatch(actDeleteProject(result));
    }
}

const actDeleteProject = (result) => {
    return {
        type: Types.DELETE_PROJECT,
        result
    }
}

// update a project

export const actEditProject = (_id, name, description) => {
    return {
        type: Types.EDTIT_PROJECT,
        result: {
            project: {
                _id,
                name,
                description
            }
        }
    }
}
// add new a project
export const actAddNewProjectRequest = (name, description) => {
    return async (dispatch) => {
        var result = await apiCaller('project', 'post', {name, description});
        return dispatch(actAddNewProject(result));
    }
}

const actAddNewProject = (result) => {
    return {
        type: Types.CREATE_NEW_PROJECT,
        result
    }
}

// add member into project

export  const actAddMemberToProjectRequest = (project_id, user_id) => {
    return async (dispatch) => {
        var result = await apiCaller('project/member', 'put', {project_id, user_id});
        return dispatch(actAddMemberToProject(result));
    }
}
const actAddMemberToProject = (result) => {
    return {
        type: Types.ADD_MEMBER_INTO_PROJECT,
        result
    }
}

// remove friend from project
export  const actRemoveMemberFromProjectRequest = (project_id, user_id) => {
    return async (dispatch) => {
        var result = await apiCaller('project/member', 'delete', {project_id, user_id});
        return dispatch(actRemoveMemberFromProject(result));
    }
}
const actRemoveMemberFromProject = (result) => {
    return {
        type: Types.REMOVE_USER_FROM_PROJECT,
        result
    }
}

//get members of project

export  const actGetMemberOfProjectRequest = (project_id) => {
    return async (dispatch) => {
        var result = await apiCaller(`project/member?id=${project_id}`, 'get', {});
        return dispatch(actGetMemberOfProject(result));
    }
}
const actGetMemberOfProject = (result) => {
    return {
        type: Types.FETCH_MEMBERS_OF_PROJECT,
        result
    }
}

//create new user
export const actAddNewUserRequest = (name, email) => {
    return async (dispatch) => {
        var result = await apiCaller(`user`, 'post', {name, email});
        return dispatch(actAddNewUser(result));
    }
}

const actAddNewUser = (result) => {
    return {
        type: Types.CREATE_NEW_USER,
        result
    }
}

// delete user
export const actDeleteUserRequest = (id) => {
    return async (dispatch) => {
        var result = await apiCaller(`user`, 'delete', {id});
        return dispatch(actDeleteUser(result));
    }
}

const actDeleteUser = (result) => {
    return {
        type: Types.DELETE_USER,
        result
    }
}

export const toggleProjectEditingForm = (_id, name, description, members) =>{
    return {
        type: Types.TOGGLE_PROJECT_EDITING_FORM,
        result: {
            project: {
                _id,
                name,
                description,
                members
            }
        }
    }
}


export const getUserDetailRequest = (id) => {
    return async (dispatch) => {
        var result = await apiCaller(`user?id=${id}`, 'get', {});
        return dispatch(getUserDetail(result));
    }
}

const getUserDetail = (result) => {
    return {
        type: Types.GET_USER_DETAIL,
        result
    }
}


// var covertArraToUrl = (key, arr) =>{
//     var url = "";
//     for(let i =0;i < arr.length; i++){
//         url = url + `&${key}=${arr[i]}`;
//     }
//     return url;
// }

// get users that not be in
export const getUsersNotBeInRequest = (projectId) => {
    return async (dispatch) => {
        var result = await apiCaller(`user?projectId=${projectId}&users=true`, 'get', {});
        return dispatch(getUsersNotBeIn(result));
    }
}

const getUsersNotBeIn = (result) => {
    return {
        type: Types.GET_USERS_THAT_NOT_BE_IN,
        result
    }
}


// check email
export const checkEmailRequest = (email) => {
    return async (dispatch) => {
        var result = await apiCaller(`user/mail?email=${email}`, 'get', {});
        return dispatch(checkEmail(result));
    }
}
const checkEmail = (result) => {
    return {
        type: Types.CHECK_EMAIL,
        result
    }
}


// export const actRemoveMemberInProject = (project_id, member_id) =>{
//     return {
//         type: Types.REMOVE_USER_FROM_PROJECT,
//         result: {
//             project_id,
//             member_id
//         }
//     }
// }

export const actFetchUsersRequest = () =>{
    return async (dispatch) =>{
        var result = await apiCaller('user/all', 'get', {});
        return dispatch(actFetchUsers(result));
    }
}
const actFetchUsers = (result) => {
    return {
        type: Types.FETCH_USERS,
        result
    }
}