import React from "react";
// import StarRatingComponent from "react-star-rating-component";
// import img from "./c3.jpg";
import "./BookDetailPage.css";

class BookDetailPage extends React.Component {
  render() {
   //   console.log(this.props);
    let suggestions1 = this.props.location.suggestions;
    //  console.log(suggestions1);
    // console.log(suggestions1['0'].id._text);
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

// render() {
//    const { rating } = this.state;
//    return (
//       <div className="style">

//             <h1 className="h1">Book Detail:</h1>
//             <img src={img} alt="c2" />
//             <br />
//             <button className="bt">HUNGER GAMES</button>
//             <p>Emely Likes Element</p>
//             <StarRatingComponent name="rate1" starCount={5}
//             /><br />
//             <p>Moneeza said: " Short. "</p>
//             <p>Rafiq said: "funny. "</p>
//             <p>Ahmad said: " Awesome. "</p>
//             <hr />
//             <form>
//             <StarRatingComponent name="rate2" starCount={10} value={rating}
//                onStarClick={this.onStarClick} />
//             <p><u>Comments/Reviews:</u></p>
//             <textarea className="control"></textarea>
//             <br />
//             <input className="bt" type="submit" value="Submit" />

//          </form>
//       </div>

//    );
// }

// 18-12-2019

// state = {
//       rating: 4
//    };

// onStarClick = (nextValue) => {
//    this.setState({ rating: nextValue });
// }
