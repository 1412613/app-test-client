import * as Types from '../constant/actionTypes';

const initialState = [];

var findAndRemove = (id, users) =>{
    for(let i =0 ;i< users.length; i++){
        if(id === users[i]._id){
            users.splice(i, 1);
            break;
        }
    }
    return users;
}

const Users  = (state = initialState, action) =>{
    switch(action.type){
        case Types.GET_USERS_THAT_NOT_BE_IN:
            var {err, data} = action.result;
            if(err) return [...state];
            state = data;
            return [...state];
        case Types.ADD_MEMBER_INTO_PROJECT:
            var {err, data} = action.result;
            if(err) return [...state];
            state = findAndRemove(data._id, state);
            return [...state];
        default: return [...state];
    }
}

export default Users;