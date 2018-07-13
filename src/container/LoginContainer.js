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
    console.log(event)
    // console.log(this.state)

    // this.props.handleLogin(this.state.username)
    // if (event.target.id === "register") {
    //   const config = {
    //     method:'POST',
    //     headers: {
    //       "content-type":"application/json"
    //     },
    //     body: JSON.stringify({username:this.state.username,password:this.state.password})
    //   }
    //   fetch('http://localhost:3000/users',config)
    //     .then(res=>res.json())
    //     .then(json=> {
    //       console.log(json);
    //       localStorage.setItem('token', json.token);
    //       this.props.history.push("/gifs")
    //     })
    // }

    // this.setState({
    //   username: '',
    //   password: ''
    // })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.history.push("/gifs")
  //   console.log(event.target.id)
  // }

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