import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import MyComponent from '';
// import MyComponent from './components/LandingPage/Mycomponent';



import * as serviceWorker from './serviceWorker';
// import FetchRandomUser from './components/LandingPage/Mycomponent';


ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








