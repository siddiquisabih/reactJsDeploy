
import React, { Component } from 'react';
import Navigation from "./router";
import { Router } from 'react-router-dom';
import history from "./history";




export default class App extends React.Component {



  render() {
    return (
      <Router history={history}>
        <Navigation />
      </Router>
    )
  }
}
