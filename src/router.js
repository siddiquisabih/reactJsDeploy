import Contact from "./contact";
import About from "./about";
import Home from "./home";
import React, { Component } from 'react';

import history from "./history";
import { Switch, Route } from "react-router-dom";

export default class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Route path="/siddiquisabih/reactJsDeploy" component={Home} />
                <Route path="/siddiquisabih/reactJsDeploy/About" component={About} />
                <Route path="/siddiquisabih/reactJsDeploy/contact" component={Contact} />

            </div>



        )
    }





}