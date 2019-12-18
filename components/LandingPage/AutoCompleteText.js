import React from "react";
// import FullResultPage from "../FullResultPage/FullResultPage.js";
import { Link } from "react-router-dom";

import "./LandingPage.css";
class AutoCompleteText extends React.Component {
  state = {};

  onTextChange = e => {
    this.props.onChange(e);
  };

  renderSuggestions = () => {
    let suggestions = this.props.items;
    // console.log(suggestions);
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
                // state: {Name:'Tayyab'}
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
        {this.renderSuggestions()}
      </div>
    );
  }
}
export default AutoCompleteText;

// 11-12-2019
//   const regex = new RegExp(`^${this.props.text}`, 'i');
//   let suggestions = this.props.items.filter(v => regex.test(v));
//   console.log(suggestions)
//   const value = e.target.value;

//   this.setState(() => ({ text: value }));
//   suggestions: [],
//   value:'',
//   text:''

// .then(async (res) => {
//     const value = await res.text();

//     const result = convert.xml2json(value, { compact: true, spaces: 4 });
//     const myObj = JSON.parse(result);
//     console.log(myObj)
//     let SearchArray = [];
//     SearchArray.push(myObj);
//     let temp_suggestions = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.author.name._text);
//     let temp_suggestions1 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.small_image_url._text);
//     let temp_suggestions2 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.title._text);
//     return (<img>{temp_suggestions1}</img>
//       <span>{temp_suggestions}</span>
//       <span>{temp_suggestions2}</span>

//     );})
//       .then(data => {this.setState(()=>({ suggestions: [...data] }));})

//   .catch(error => {
//     this.setState({
//       error: error.toString(),
//       loading: true
//     });
//   })
// }

// onTextChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       loading: false,
//       text: value
//     });
//     fetch(`https://www.goodreads.com/search/index.xml?key=l7qiXtcIr7A2PzHh726pBg&q=${e.target.value}`)

//       .then(async (res) => {
//         const value = await res.text();

//         const result = convert.xml2json(value, { compact: true, spaces: 4 });
//         const myObj = JSON.parse(result);
//         console.log(myObj)
//         let SearchArray = [];
//         SearchArray.push(myObj);
//         let temp_suggestions = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.author.name._text);
//         let temp_suggestions1 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.small_image_url._text);
//         let temp_suggestions2 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.title._text);
//         return (<div><img>{temp_suggestions1}</img>
//         <span>{temp_suggestions}</span>
//         <span>{temp_suggestions2}</span></div> )

//         })
//           .then(data => {this.setState(()=>({ suggestions: [...data] }));})

//       .catch(error => {
//         this.setState({
//           error: error.toString(),
//           loading: true
//         });
//       })
//   }
