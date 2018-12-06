import * as Types from '../constant/actionTypes';

const initialState = [
    {
        _id: 1,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
    {
        _id: 2,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
    {
        _id: 3,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
    {
        _id: 4,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
    {
        _id: 5,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
    {
        _id: 6,
        name: 'vo quoc tuan',
        email: 'vqtuan@gmail.com'
    },
]

var findAndRemove = (id, state) =>{
    for(let i = 0; i < state.length; i++){
        if(id === state[i]._id){
            state.splice(i, 1);
            break;
        }
    }
    return state;
}

const Users  = (state = initialState, action) =>{
    switch(action.type){
        case Types.FETCH_USERS:
            var {err, data} = action.result;
            if(!err){
                state = data;
            }
            return [...state];
        case Types.CREATE_NEW_USER:
            var {err, data} = action.result;
            if(err) return [...state];
            state.push(data);
            return [...state];
        case Types.DELETE_USER:
            var {err, data} = action.result;
            if(err) return [...state];
            state = findAndRemove(data._id, state);
            return [...state];
        default: return [...state];
    }
}

export default Users;