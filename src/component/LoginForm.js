import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    show: false
  }

  handleClick = (event) => {
    this.state.show ? this.setState({ show: false }) : this.setState({ show: true })
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Log In</h2>
        {this.state.show
        ?
        <form onSubmit={this.props.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={this.props.username}
            name="username"
            onChange={this.props.handleChange}
          />
          <label>Password:</label>
          <input
            type="text"
            value={this.props.password}
            name="password"
            onChange={this.props.handleChange}
          />
          <button type="submit">Create User</button>
        </form>
        :
        null
        }
      </div>
    )
  }
}