
export default (state = 0 , action) =>{ ///do mutate state in reducers because redux will not recognize it since its the same object or array being referenced.
    switch(action.type){
        case 'NEXT_QUESTION':
            return state + 1;
        default:
            return state;
    }

};


