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
import LoginForm from './component/LoginForm'
import RegisterForm from './component/RegisterForm'
import Adapter from './Adapter'

class App extends Component {
  state = {
    user: '',
    likes: []
  }

  // handleLogin = (username) => {
  //   this.state.loggedIn ? this.setState({ loggedIn: false, user:'' }):this.setState({ loggedIn: true, user: username })
  // }

  // handleLogout = (event) => {
  //   this.setState({ loggedIn: false, user: '' })
  // }

  handleClick = (event,id) => {
    if (this.state.likes.includes(id)) {
      console.log('Only one copy of a gif for you!')
    } else {
      const likes = [...this.state.likes,id]
      this.setState({likes})
    }
  }

  getUser = (id,fn) => {
    this.setState({user:id},()=>{console.log(this.state.user)},fn())
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        {/* <LoginContainer /> */}
        <Route exact path="/login" component={()=><LoginForm getUser={this.getUser}/>} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/gifs" component={()=><GifContainer handleClick={this.handleClick} />} />
        {Adapter.isLoggedIn() 
        ? 
        this.getUser
        :
        null
        }
        {/* {this.state.loggedIn 
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
          null} */}

        {/* <BlogForm /> */}
      </div>
    );
  }
}

export default App;
