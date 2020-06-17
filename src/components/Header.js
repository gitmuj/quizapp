import React from 'react';
import {connect} from 'react-redux';
import {updateCounter} from '../actions'

class Header extends React.Component{



    render(){
        return(
            <div className="ui menu">
                <div className="header item">
                    Quiz App
                </div>
                <a className="item">
                    Score: {this.props.counter} / 10
                </a>
           
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{isCorrectAnswer : state.onSubmitAnswer , counter : state.updateCounter}
};

export default connect(mapStateToProps, {updateCounter})(Header);