import React from 'react';
import RegisterForm from '../component/RegisterForm'
import LoginForm from '../component/LoginForm'

export default class LoginContainer extends React.Component {

  state = {
    username: '',
    password: '',
    show: false
  }

  componentDidMount() {
    
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)

    this.props.handleLogin(this.state.username)

    fetch('')

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="logincontainer">
        {this.props.loggedIn ? 
          <button type="button" onClick={this.props.handleLogout}>Logout</button>
          :
          <div>
            <RegisterForm 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit} 
              username={this.state.username}
              password={this.state.password}
            />
            <LoginForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              username={this.state.username}
              password={this.state.password}
            />
          </div>
        }
      </div>
    )
  }
}