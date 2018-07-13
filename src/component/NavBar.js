import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { withRouter, Route,NavLink } from 'react-router-dom';
import Home from '../component/Home'
import LoginForm from '../component/LoginForm'
import RegisterForm from '../component/RegisterForm'
import LoginContainer from '../container/LoginContainer'
import GifContainer from '../container/GifContainer'
import Adapter from '../Adapter'
import LogoutButton from '../component/LogoutButton'

export default class NavBar extends Component {

  // handleClick = () => {
  //   console.log(this.history)
  //   Adapter.logout()
  //   this.props.history.push("/")
  // }

  render() {
    return (
      <header className="nav">
        <NavLink activeclass="selected" exact to="/">Home</NavLink>
        {Adapter.isLoggedIn() ? 
        <React.Fragment>
          <NavLink activeclass="selected" exact to="/gifs">Gifs</NavLink>
          <NavLink activeclass="selected" exact to="/favgifs">Favorite Gifs</NavLink>
          <LogoutButton />
        </React.Fragment>
          :
        <React.Fragment>
          <NavLink activeclass="selected" exact to="/register">Register</NavLink>
          <NavLink activeclass="selected" exact to="/login">Log in</NavLink>
        </React.Fragment>
        }
        {/* <Route exact path="/" component={Home} /> */}
        
      </header>
    )
  }
}