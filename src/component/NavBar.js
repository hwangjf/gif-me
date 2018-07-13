import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header className="nav">
        <NavLink activeclass="selected" exact to="/">Home</NavLink>
        <NavLink activeclass="selected" exact to="/register">Register</NavLink>
        <NavLink activeclass="selected" exact to="/login">Log in</NavLink>
        <NavLink activeclass="selected" exact to="/gifs">Gifs</NavLink>
        <NavLink activeclass="selected" exact to="/favgifs">Favorite Gifs</NavLink>
      </header>
    )
  }
}