import React, { Component } from 'react'
import '../static/css/Landing.css'

var welcome = {
  fontSize: 50
};

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">

            <div className="col-sm-8 mx-auto">
              <br/>
              <h1 className="text-center" style={welcome}>Welcome to bitebody.io!</h1>
              <hr/>
              <br/>
              <center>
                <p>Our web application is intended to make traveling much easier. Our goal and vision is to allow our users to have access to popular tourist spots, great dining options, and awesome things to do!</p>
              </center>
            </div>

        </div>
      </div>
    )
  }
}

export default Landing
