import opentdb from '../api/opentdb';

export const submitAnswer = () =>{
    return {
        type: 'SUBMIT_ANSWER'
    };
};

export const fetchCategories =  () => {
    console.log('fetching categories')
    return async function(dispatch){

        const response = await opentdb.get('/api_category.php');

        dispatch( {type: 'FETCH_CATEGORIES', payload: response.data.trivia_categories }); //instead of return an action we call dispatch with it
    } 
};

export const fetchQuestions = (categoryId) =>{
    return async function(dispatch) {
        
        const response = await opentdb.get(`/api.php?amount=10&category=${categoryId}&difficulty=medium&type=multiple`);

        dispatch({type: 'FETCH_QUESTIONS', payload: response.data.results});

        dispatch(displayQuestions());
    }
};

export const displayQuestions = () =>{
    return {
        type: 'DISPLAY_QUESTIONS',
        payload: true
    };
};

export const onSubmitAnswer = (answer, correctAnswer) =>{
    return {
       type: 'SUBMIT_ANSWER',
       payload:  (answer === correctAnswer ? true : false)
    }
};

export const nextQuestion = () =>{
    return {
    type:'NEXT_QUESTION'

    }
};

export const updateCounter = () =>{
    return {
        type: 'UPDATE_COUNTER'
    }
}








