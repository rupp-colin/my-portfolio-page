import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
      <App />
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//header component
//  Name, title
//
//Contact Section component
//  email
//  github
//  linkedIn
//
//About Me component
//  passion for web dev
//  working on teams
//  skills outside of coding
//
//Projects component
//  easy to see projects, project descriptions and screenshots
//
//Other High Level Basics to include
//  Custon URL with my name
//  mobile first design
//  responsive design from 320px to 1600 px
//  has a favicon
