import React from "react";

import "./BookDetailPage.css";

class BookDetailPage extends React.Component {
  render() {
    let suggestions1 = this.props.location.suggestions;
    
    if (suggestions1.length === 0) {
      return null;
    } else
      return (
        <div className="Main">
          
            <div key={suggestions1.id._text}>
               <div className="imageStyle">
               <img src={suggestions1.best_book.image_url._text} alt="img" />

               </div>
               <div className="spanStyle">
               <span>{suggestions1.best_book.title._text}</span>
              <br />
              <span>
                by:<b>{suggestions1.best_book.author.name._text}</b>
              </span>
              <br />
              <span>
                Rating Count:<b>{suggestions1.ratings_count._text}</b>
              </span>
              <br />
              <span>
                Reviews Count:<b>{suggestions1.text_reviews_count._text}</b>
              </span>
               </div>
              
            </div>
          
        </div>
      );
  }
}

export default BookDetailPage;
