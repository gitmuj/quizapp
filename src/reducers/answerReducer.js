export default (state = null, action) =>{ ///do mutate state in reducers because redux will not recognize it since its the same object or array being referenced.
    switch(action.type){
        case 'SUBMIT_ANSWER':
            return action.payload;
        default:
            return state;
    }

};
