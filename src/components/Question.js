import React from 'react';
import QuestionBox from './QuestionBox';
import displayingQuestions from '../reducers';
import {connect} from 'react-redux';

class Question extends React.Component{

    state = {question: null, answers: [], correctAnswer : null, currentQuestion: 0, renderedQuestions:[]};

    constructor(props){
        super(props);
        this.submitAnswer = this.submitAnswer.bind(this);
      
    }

    submitAnswer(answer){
        this.state.currentQuestion++;
        console.log(this.props.displayQuestions);
        
     
    }

   
    renderQuestions(){
       return  (
            this.props.questions.map(question =>{
                return <QuestionBox 
                key = {this.props.questions.indexOf(question)}
                question ={question}
                nextQuestion = {this.nextQuestion}
                 />
            }));
    }    
 


    render(){
        if(this.props.nextQuestion<10){
            return(
 
                <div>{this.renderQuestions()[this.props.nextQuestion]}</div>
                );
        }

        return (
            <div className="ui placeholder segment">
                <h2 className="ui center aligned header">End of quiz, you got {this.props.counter} questions correct!</h2>
                <button class="ui inverted green button center aligned" onClick={() => window.location.reload()}>Try again</button>
            </div>
        );

    }

}

const mapStateToProps = (state) =>{
    return{
        displayingQuestions : state.displayingQuestions,
        questions: state.questions,
        nextQuestion : state.nextQuestion,
        counter: state.updateCounter
    }
}

export default connect(mapStateToProps, {displayingQuestions}) (Question);