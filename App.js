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