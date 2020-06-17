import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import questionsReducer from './questionsReducer';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';
import nextQuestionReducer from './nextQuestionReducer';
import updateCounterReducer from './updateCounterReducer';


export default combineReducers({
    categories: categoriesReducer,
    questions : questionsReducer,
    displayingQuestions: questionReducer,
    onSubmitAnswer: answerReducer,
    nextQuestion: nextQuestionReducer,
    updateCounter : updateCounterReducer
});