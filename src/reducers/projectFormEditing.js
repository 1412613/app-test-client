import * as Types from '../constant/actionTypes';

const initialState = {
    isOpen: 1,
    project: {
        _id: '',
        name: '',
        description: '',
        members: []
    }
}

var findAndDeleteMember = (id, state) => {
    var {members} = state;
    var index = -1;
    for(let i =0; i < members.length; i++){
        if(members[i]._id === id){
            members.splice(i, 1);
            break;
        }
    }
    return state;
}

var RemoveMember = (member_id, project) =>{
    var {members} = project;
    for(let i = 0; i < members.length; i++){
        if(member_id === members[i]._id){
            members.splice(i, 1);
            break;
        }
    }
    project.members = members;
    return project;
}
const ProjectFormEditing  = (state = initialState, action) =>{
    switch(action.type){
        case Types.TOGGLE_PROJECT_EDITING_FORM:
            state.isOpen ++;
            if(action.result.project !== undefined || action.result.project !== null){
                state.project = action.result.project;
            }
            return state;
        case Types.DELETE_PROJECT:
            var {err, data} = action.result;
            if(!err){
                if(state.project._id === data._id){
                    state = {
                        isOpen: 1,
                        project: {
                            _id: '',
                            name: '',
                            project: '',
                            members: []
                        }
                    };
                }
            }
            return state;
        case Types.FETCH_MEMBERS_OF_PROJECT:
            var {err, data} = action.result;
            if(err) return state;
            state.isOpen +=2;
            state.project.members = data;
            return state;
        case Types.ADD_MEMBER_INTO_PROJECT:
            var {err, data} = action.result;
            if(err) return state;
            state.isOpen +=2;
            state.project.members.push(data);
            return state;
        case Types.REMOVE_USER_FROM_PROJECT:
            var {err, data} = action.result;
            if(err) return state;
            state.isOpen +=2;
            state.project = findAndDeleteMember(data.user._id, state.project);
            return state;
        default: return state;
    }
}

export default ProjectFormEditing;