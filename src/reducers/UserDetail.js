import * as Types from '../constant/actionTypes';

const initialState = {
    _id: '',
    name: '',
    email: '',
    projects: [],
}

var findAndRemove = (id, projects) => {
    for(let i =0; i < projects.length; i++){
        if(projects[i]._id === id){
            projects.splice(i, 1);
            break;
        }
    }
    return [...projects];
}

const UserDetail  = (state = initialState, action) =>{
    switch(action.type){
        case Types.GET_USER_DETAIL:
            var {err, data} = action.result;
            if(err) return state;
            state = data;
            return state;
        case Types.REMOVE_USER_FROM_PROJECT:
            var {err, data} = action.result;
            if(err) return state;
            state.projects = findAndRemove(data.project._id, state.projects);
            return state
        default: return state;
    }
}

export default UserDetail;