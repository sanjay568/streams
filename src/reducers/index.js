import { combineReducers } from 'redux';
import authReduce from './authReducer';
import { reducer as formReducer } from 'redux-form';

const initialState = [];
export  const showAllPostReducer = (state = initialState,action) => {
    console.log(action);
    if(action.type === 'FETCH_LIST') {
        const newState = [...state, action.payload];
        return action.payload;
    }
    return state;
}

export const getStreamByIdReducer = (state = {}, action ) => {
    if(action.type ==='FETCH_STREAM') {
       return action.payload
    }
    return state;
}


export const delStreamByIdReducer = (state = {}, action ) => {
    if(action.type ==='DELETE_STREAM') {
       return action.payload
    }
    return state;
}

export default combineReducers({
    posts: showAllPostReducer,
    auths: authReduce,
    stream: getStreamByIdReducer,
    delStream: delStreamByIdReducer,
    reduceMe: () => 2,
    form: formReducer,
   
});