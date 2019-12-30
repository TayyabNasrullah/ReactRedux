import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
class AutoCompleteText extends React.Component {
  state = {};

  onTextChange = e => {
    this.props.onChange(e);
  };
  
  renderSuggestions = () => {
    let suggestions = this.props.items;
    if (suggestions.length === 0) {
      return null;
    } else
      return (
        <React.Fragment>
          <ul className="suggestions">
            {suggestions.slice(0, 5).map(item => (
              <div key={item.id._text}>
                <li>
                  <Link
                    to={{
                      pathname: "/BookDetailPage",
                      suggestions: item
                    }}
                    onClick={() => item}
                  >
                    <img src={item.best_book.small_image_url._text} alt="img" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="span">{item.best_book.title._text}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="span">
                      by:<b>{item.best_book.author.name._text}</b>
                    </span>
                  </Link>
                </li>
              </div>
            ))}

            <Link
              to={{
                pathname: "/FullResultPage",

                suggestions: suggestions
              }}
              className="btn btn1"
            >
              View More!
            </Link>
          </ul>
        </React.Fragment>
      );
  };

  render() {
    return (
      <div className="input">
        
        <input
          onChange={this.onTextChange}
          value={this.props.text}
          className="search"
        />
        
        
        {
        this.props.text === '' ? null :
        this.renderSuggestions()}
      </div>
    );
  }
}
export default AutoCompleteText;
