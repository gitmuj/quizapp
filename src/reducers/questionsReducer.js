export default (state = [], action) =>{ ///do mutate state in reducers because redux will not recognize it since its the same object or array being referenced.
    switch(action.type){
        case 'FETCH_QUESTIONS':
            return action.payload;
        default:
            return state;
    }

};




