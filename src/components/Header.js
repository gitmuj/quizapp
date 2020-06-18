import React from 'react';
import {connect} from 'react-redux';
import {updateCounter} from '../actions'

class Header extends React.Component{



    render(){

        const divStyle = {
            backgroundColor: '#A8DADC'
        }
        return(
            <div style={divStyle} className="ui menu">
                <div className="header item">
                10 Questions Quiz
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