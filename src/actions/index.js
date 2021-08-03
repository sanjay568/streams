import axios from "axios";
import { useHistory } from "react-router";



export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auths;
    formValues = {...formValues, userId};
    console.log(formValues);
    await axios.post('http://localhost:3001/streams', formValues);
    const history = useHistory();
   history.push("/");

};

export const fetchList = () => async dispatch => {
    
    const response = await axios.get('http://localhost:3001/streams');
    console.log(response);
    dispatch({
        type: 'FETCH_LIST',
        payload: response.data
    });
};

export const getStream = (id) => async dispatch => {
    const response = await axios.get('http://localhost:3001/streams/'+id);
    
    dispatch({
        type: 'FETCH_STREAM',
        payload: response.data
    });
}


export const deleteStream = (id) => async dispatch => {
    const response = await axios.delete('http://localhost:3001/streams/'+id);
    
    dispatch({
        type: 'DELETE_STREAM',
        payload: response.data
    });
}



export const trySignIn = (id) => {
    console.log(id);
    return {
        type: 'SIGN_IN',
        payload: id
    }
};

export const trySignOut = () => {
    return {
        type: 'SIGN_OUT'
    }
};

