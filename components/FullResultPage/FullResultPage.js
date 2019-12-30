import React from "react";
import { Link } from "react-router-dom";

import "./FullResultPage.css";

class FullResultPage extends React.Component {
  render() {
    
    let suggestions1 = this.props.location.suggestions;


    return (
      <div className="table">
        {suggestions1.map(suggestion => (
          <div key={suggestion.id._text}>
            <li className="td">
              <Link
                to={{
                  pathname: "/BookDetailPage",
                  suggestions: suggestion
                }}
                onClick={() => suggestion}
              >
                <img
                  src={suggestion.best_book.small_image_url._text}
                  alt="img"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{suggestion.best_book.title._text}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  by:<b>{suggestion.best_book.author.name._text}</b>
                </span>
              </Link>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default FullResultPage;
