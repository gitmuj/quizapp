import React from 'react';
import {fetchQuestions} from '../actions';
import {connect} from 'react-redux';

class CategoryItem extends React.Component{

    render(){
        console.log(this.props.questions);
        return(
            <div className="item ui segment" onClick={()=> {this.props.fetchQuestions(this.props.category.id)}} >
                <div className="content">
                    <div className="header" >
                    {this.props.category.name}
                    </div>
                </div>
            </div>
            );
    }


}


const mapStateToProps = (state) =>{
    return {questions: state.questions}
};



export default connect(mapStateToProps, {fetchQuestions})(CategoryItem);