const signInStatue = {
    isSignedIn : false,
    userId : null
};
export default (state = signInStatue ,action) =>  {
   console.log(action);
    switch(action.type) {
       
        case 'SIGN_IN': 
           return {...state, isSignedIn: true, userId: action.payload };
        case 'SIGN_OUT': 
           return {...state, isSignedIn: false };
        default: 
           return state
    }
};

