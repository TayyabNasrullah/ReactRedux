import React from "react";
import AutocompleteText from "./AutoCompleteText";
import "./LandingPage.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import img from "./LandingPage.png";
// import img from "./LP2.jpg";

const convert = require("xml-js");

class LandingPage extends React.Component {
  state = {
    text: "",
    loading: true,
    suggestions: [],
    error: ""
  };

  suggestionSelected = value => {
    // console.log(value);

    this.setState({ text: value });
    // console.log(this.state.text);
  };

  onTextChange = e => {
    const value = e.target.value;
    this.setState({
      loading: false,
      text: value
    });
    fetch(
      `https://www.goodreads.com/search/index.xml?key=l7qiXtcIr7A2PzHh726pBg&q=${e.target.value}`
    )
      .then(async res => {
        const value = await res.text();

        const result = convert.xml2json(value, { compact: true, spaces: 4 });
        const myObj = JSON.parse(result);
        // console.log(myObj);

        let SearchArray = [];
        SearchArray.push(myObj);

        let temp_suggestions =
          SearchArray[0].GoodreadsResponse.search.results.work;
        // console.log('================');
        // console.log('temp_suggestions');
        // console.log('==============');

        this.setState({
          suggestions: [...temp_suggestions],
          loading: false
        });
      })

      .catch(error => {
        this.setState({
          error: error.toString(),
          loading: true
        });
      });
  };

  render() {
    return (
      <div>
        <img className="img" src={img} alt="LandingPage" />
        <AutocompleteText
          items={this.state.suggestions}
          onChange={this.onTextChange}
          suggestionSelected={this.suggestionSelected}
          name="text"
          text={this.state.text}
          type="text"
        ></AutocompleteText>
      </div>
    );
  }
}

export default LandingPage;
// (b=>b.best_book.small_image_url._text)
// (b=>b.best_book.auther.name_text)

// state = {
//   suggestions: [],
// };

// onTextChange = (e) => {
//   this.props.onChange(e);

//   const value = e.target.value;

//   this.setState(() => ({ text: value }));
// }

// suggestionSelected = (value) => {
//   this.setState(() => ({
//       text: value,
//   })

//   )
// }

// renderSuggestions = () => {
//   const regex = new RegExp(`^${this.state.text}`, 'i');
//   let suggestions = this.props.items.sort().filter(v => regex.test(v));

//   // const { suggestions } = this.props;
//   if (suggestions.length === 0) {
//       return null;
//   }
//   return (
//       <ul>{suggestions.map((item) => <li key={item}onClick={() => this.suggestionSelected(item)}> {item} </li>)}
//       </ul>
//   );
// }

// state = {
//   suggestions: [],
//   text: '',
// };

// onTextChange = (e) => {
//   const { items } = this.props;
//   const value = e.target.value;
//   let suggestions = [];
//   if (value.length > 0) {
//       const regex = new RegExp(`^${value}`, 'i');
//       suggestions = items.sort().filter(v => regex.test(v));

//   }
//   this.setState(() => ({ suggestions, text: value }));
// }

// suggestionSelected = (value) => {
//   this.setState(() => ({
//       text: value,
//       suggestions: [],
//   })

//   )
// }

// renderSuggestions = () => {
//   const { suggestions } = this.state;
//   if (suggestions.length === 0) {
//       return null;
//   }
//   return (
//       <ul>{suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
//       </ul>
//   );
// }
// 11-12-2019

// [...SearchArray[0].GoodreadsResponse.search.results.work.map( b => b.best_book.title._text),...SearchArray[0].GoodreadsResponse.search.results.work.map(b=>b.best_book.auther.name_text)]
// return temp_suggestions1;

// console.log(temp_suggestions)
// return temp_suggestions;
// console.log(temp_suggestions1)
// })
// .then(data => {
//   this.setState(() => ({

//     suggestions: [...data]

//   }))
// })
// import Autocomplete from './Autocomplete';
// console.log(value);
// console.log(result);

//   <ul className="suggestions">
// {suggestions.map(suggestion =>

//     <li key={i} onClick={() => this.props.suggestionSelected(item)}>{suggestion.title}</li>
//     <li key={i} onClick={() => this.props.suggestionSelected(item)}>{suggestion.author}</li>
//     <li key={i} onClick={() => this.props.suggestionSelected(item)}>< img src={suggestion.small_image_url} /></li>
//     )}

//   </ul>  );

// 12-12-2019
// const bookTitle = SearchArray[0].GoodreadsResponse.search.results.work.best_book.title._text;
// let displayTitle = bookTitle.split(" ").slice(0, 4).join(" ");
//   let temp_suggestions = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.author.name._text)
// let temp_suggestions1 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.small_image_url._text)
// let temp_suggestions2 = SearchArray[0].GoodreadsResponse.search.results.work.map(b => b.best_book.title._text)
// this.setState({ suggestions: [...temp_suggestions, ...temp_suggestions1, ...temp_suggestions2] })})
//   return (<div><img>{temp_suggestions1}</img>
//     <span>{temp_suggestions}</span>
//     <span>{temp_suggestions2}</span></div>)
// })
//   return (

//     <div >
//       <img
//         className="card-img-top pl-2 pr-2 pt-2"
//         src={SearchArray[0].GoodreadsResponse.search.results.work.best_book.image_url}
//         alt="Book cover"
//         height="100px"
//       />

//       <p title={displayTitle.includes("...") ? bookTitle : ""}>
//         {displayTitle}
//       </p>
//       <p >
//         By {SearchArray[0].GoodreadsResponse.search.results.work.best_book.author.name}
//       </p>
//     </div>)
// })
// .then(data => {
//   this.setState(() => ({

//     suggestions: [...data]

//   }))
// })
//   const suggestionsJsx = [];
//   this.state.suggestions.foreach((data) => {
//  suggestionsJsx.push (<div key={i}>
//     <div>{data.title._text}</div>
//     <div>{data.author.name._text}</div>
//     < img src={data.small_image_url._text} />

//   </div>)
//   });

// this.state.suggestions.map((data, i) => (<div key={i}>
//   <div>{data.title._text}</div>
//   <div>{data.author.name._text}</div>
//   < img src={data.small_image_url._text} />

// </div>));
// let temp_suggestions = SearchArray[0].GoodreadsResponse.search.results.work.map(
//   b => b.best_book.author.name._text
// );
// let temp_suggestions1 = SearchArray[0].GoodreadsResponse.search.results.work.map(
//   b => b.best_book.small_image_url._text
// );
// let temp_suggestions2 = SearchArray[0].GoodreadsResponse.search.results.work.map(
//   b => b.best_book.title._text
// );
// ...temp_suggestions1,
// ...temp_suggestions2
// {
/* {this.state.suggestions.map(suggestion => (
          <div  >
            <div>{suggestion.title}</div>
            <div>{suggestion.author}</div>
            < img src={suggestion.small_image_url} />

          </div>))} */
// }
