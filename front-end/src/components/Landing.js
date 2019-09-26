import React, { Component } from 'react'
import '../static/css/Landing.css'

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <h1>Workout videos and routines for everybody.</h1>

              <p>We offer all sorts of features!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
