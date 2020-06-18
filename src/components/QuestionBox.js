import React, { useState } from 'react';
import {connect} from 'react-redux';
import { onSubmitAnswer, updateCounter } from '../actions';
import {nextQuestion} from '../actions';
import _ from 'lodash';




class QuestionBox extends React.Component{
    
    constructor(props){
        super(props);

        const questionString = JSON.stringify(this.props.question.question);
        this.questionStringEscaped = questionString.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f")
        .replace(/&quot;/g,`"`)
        .replace(/&#039;/g,"'")
        .replace(/&amp; /g,"&");

        this.answers = _.shuffle([...this.props.question.incorrect_answers, this.props.question.correct_answer]);
        

    }

    handleChange = (e) =>{
         this.answer = e.target.value;
        console.log(this.answer);
    }



    checkbox =( answers) => {

            return (
                
                <div className="grouped fields">
                    { this.answers.map( answer => {
                        
                    return  <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" 
                                name="answer"
                                value={answer}  
                                onChange={this.handleChange}
                                />
                                <label className="option"> {answer}</label>
                            </div>
                        </div>
                    })}

                </div>

            );
    }


   checkAnswer(answer, correctAnswer){
        if(answer === correctAnswer) {
            this.props.updateCounter();
        }
   }

    render(){
        console.log(this.props.question);
        return (
                
                <div className="ui segment">
                    <div className="ui large message">
                        {`${this.questionStringEscaped}`} 
                    </div>
                    <div className="ui form">
                        {this.checkbox(this.answers)}
                    </div>
                    {<button classNameName="ui primary button" 
                    onClick={() => {
                    this.checkAnswer(this.answer, this.props.question.correct_answer); 
                    this.props.nextQuestion()}} 
                    >Submit</button>
                    // <h4>{displayQuestions}</h4>
                }
                    
                </div>
        );
    }
}


    



const mapStateToProps = (state) =>{
    return {
    onSubmitAnswer: state.onSubmitAnswer,
    nextQuestion : state.nextQuestion,
    updateCounter : state.updateCounter
    }
};

export default connect(mapStateToProps, {onSubmitAnswer, nextQuestion, updateCounter})(QuestionBox);

