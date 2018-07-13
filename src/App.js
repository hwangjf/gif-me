import React, { Component } from 'react';
import './App.css';
import NavBar from './component/NavBar'
import JumboHeader from './component/JumboHeader'
import BlogContainer from './container/BlogContainer'
import BlogForm from './component/BlogForm'
import GifContainer from './container/GifContainer'
import LoginContainer from './container/LoginContainer'
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home'

class App extends Component {
  state = {
    loggedIn: false,
    user: '',
    likes: []
  }

  handleLogin = (username) => {
    this.state.loggedIn ? this.setState({ loggedIn: false, user:'' }):this.setState({ loggedIn: true, user: username })
  }

  handleLogout = (event) => {
    this.setState({ loggedIn: false, user: '' })
  }

  handleClick = (event,id) => {
    if (this.state.likes.includes(id)) {
      console.log('Only one copy of a gif for you!')
    } else {
      const likes = [...this.state.likes,id]
      this.setState({likes})
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <JumboHeader /> */}
        {this.state.loggedIn 
          ?
          <LoginContainer 
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn} 
          /> 
          : 
          <LoginContainer 
            handleLogin={this.handleLogin} 
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn} 
          />}

        {this.state.loggedIn 
          ? 
          <GifContainer 
            user={this.state.user} 
            handleClick={this.handleClick} /> 
          : 
          null}

        {/* <BlogForm /> */}
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
