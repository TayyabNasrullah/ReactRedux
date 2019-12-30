import React from "react";
import { connect } from "react-redux";
// import {loadUsers} from "../../actions/index.js"
import AutocompleteText from "./AutoCompleteText";
import { apiFetchData } from "../../actions/index.js";

import "./LandingPage.css";

import img from "./LandingPage.png";

class LandingPage extends React.Component {
  state = {
    text: "",
    loading: false,
    error: ""
  };

  onTextChange = e => {
    const value = e.target.value;
    

    if (value.length === 0) {
      return (
        this.setState({
          text: '',
          loading: true
        })
      )

    } else
      this.setState({
        text: value,
        loading: true
      });
    this.props.apiFetchData(value);
  };

  render() {
    let suggest = this.props.suggestions;
    console.log(this.props);
    console.log(suggest);
    if (this.props.loading) { 
        return <div>Loading</div> 
       }
       if (this.props.error) {        
         return <div style={{ color: 'red' }}>
         ERROR: {this.props.error}</div>
         }
    return (
      <div>
        <img className="img" src={img} alt="LandingPage" />
        <AutocompleteText
          items={suggest}
          onChange={this.onTextChange}
          name="text"
          text={this.state.text}
          type="text"
        ></AutocompleteText>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    suggestions: state.suggestions,
    loading:state.loading,
    error:state.error
  };
};

const mapDispatchToProps = dispatch => ({
  apiFetchData: id => dispatch(apiFetchData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
