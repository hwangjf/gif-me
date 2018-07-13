import React, { Component } from 'react';

export default class RegisterForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    const config = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/sessions', config)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        localStorage.setItem('token', json.token);
        this.props.getUser(json.id,this.props.history.push("/gifs"));
      })
  }

  render() {
    return (
      <div>
        <h2>Log in</h2>
        <form id="login" onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit" >Create User</button>
        </form>
      </div>
    )
  }
}