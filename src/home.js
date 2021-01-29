
import React, { Component } from 'react';
import history from "./history";




export default class Home extends React.Component {


    render() {
        return (

            <div>
                <button onClick={() => { history.push("/siddiquisabih/reactJsDeploy/about") }} >About Us</button>
                <button onClick={() => { history.push("/siddiquisabih/reactJsDeploy/contact") }} >Contact us</button>
            </div>


        )
    }
}
