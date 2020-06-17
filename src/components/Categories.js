import React from 'react';
import CategoryItem from './CategoryItem';
import {fetchCategories} from '../actions';
import {connect} from 'react-redux';


class Categories extends React.Component{

    state = { isLoading:true};

    constructor(props){
      super(props);
      this.renderedList = this.renderedList.bind(this);
    }
 


      componentDidMount() {
        console.log("categories mounted")
        this.props.fetchCategories();
       
        
      }

    renderedList(){
      console.log(this.props.categories);
      return this.props.categories.map(category => {
        return(
          <CategoryItem 
          key = {category.id} 
          category={category}
          />
        );
      })
    }



    render(){

      if (!this.props.categories.length)
        return <span>Is Loading</span>;


        return(
          <div className="container">
            <div className="ui middle aligned selection list">
              {this.renderedList()}
            </div>
          </div>

        );
    }

}

const mapStateToProps = (state) =>{
  return {categories: state.categories};
};

export default connect(mapStateToProps, {fetchCategories})(Categories);