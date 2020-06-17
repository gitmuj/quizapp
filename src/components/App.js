import React from 'react';
import Header from './Header'
import Category from './Categories';
import Question from './Question';
import { connect } from 'react-redux';


class App extends React.Component{



    constructor(props){
        super(props);
    }


    render(){

        let display;
  
        if (!this.props.displayingQuestions) {
            console.log(this.props.displayingQuestions);
            display =  <div><Category onCategorySelect = {this.onCategorySelect} displayQuestions={this.props.displayingQuestions}/></div>;
        } else {
            console.log('question display');

            display = <Question  displayQuestions = {this.props.displayingQuestions}/>;
        }
   
            return (
                <div className="ui container">
                    <Header  />
                    <div className ="ui segment">
                        {display}
                    </div>
    
                </div>
                
            );
        

    }
}

const mapStateToProps = (state) =>{
    return {displayingQuestions: state.displayingQuestions}
};

export default connect(mapStateToProps) (App);