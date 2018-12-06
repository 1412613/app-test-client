import * as Types from '../constant/actionTypes';

const initialState = 1

const EmailChecking  = (state = initialState, action) =>{
    switch(action.type){
        case Types.CHECK_EMAIL:
            var {err, data} = action.result;
            state ++;
            if(err === true ||!data){
                if(state % 2 === 0) state ++;
            }else{
                if(state % 2 === 1) state ++;
            }
            return state;
        default: return state;
    }
}

export default EmailChecking;