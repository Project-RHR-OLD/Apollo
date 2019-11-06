import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import david from '../static/images/david.PNG'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email
    })
  }

  imageStyling = {
    border: '2px solid black'
  }

  render() {
    return (
      <div className="container">
       <br/>
       <br/>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">{this.state.first_name}'s Profile</h1>
          </div>

          <br/>
          <center>
            <img src={david} alt="david" height="150px" style={this.imageStyling}></img><br/><br/>
           <a href="/">+ Upload a new profile picture!</a>
          </center>

          <br/>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
       
      </div>
    )
  }
}

export default Profile
