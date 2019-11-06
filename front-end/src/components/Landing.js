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
                <p>BiteBody.io is a full-stack web application that functions as a fitness initiative for people all experience levels, body types, ages, and lifestyle.</p>
              </center>
            </div>

        </div>
      </div>
    )
  }
}

export default Landing
