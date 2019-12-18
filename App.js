import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.js";
import FullResultPage from "./components/FullResultPage/FullResultPage.js";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage.js";
// import Navigation from './components/Navigation';
// const convert = require("xml-js");

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/" style={{ border: "2px solid" }}>
            Go Back!!
          </Link>

          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route
              path="/FullResultPage"
              // render={props => <LandingPage {...props}  />}
              exact
              component={FullResultPage}
            />
            }
            <Route path="/BookDetailPage" exact component={BookDetailPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import Search from "./components/LandingPage/Mycomponent";
// import BookInfo from "./components/Demo/BookInfo";

// class App extends Component {
//   state = {
//     results: [],
//     expandedBook: null
//   };

//   setResults = results => {
//     this.setState({ results });
//   };

//   collapseBook = () => {
//     this.setState({
//       expandedBook: null
//     });
//   };

//   expandBook = expandedBook => {
//     this.setState({ expandedBook });
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="header clearfix mt-5">
//           <h3 className="text-muted">Goodreads Book Search</h3>
//         </div>
//         <div className="jumbotron">
//           {this.state.expandedBook ? (
//             <BookInfo
//               bookData={this.state.expandedBook}
//               collapseBook={this.collapseBook}
//             />
//           ) : (
//             <Search
//               results={this.state.results}
//               setResults={this.setResults}
//               expandBook={this.expandBook}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
