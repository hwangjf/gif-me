import React from 'react';
import Gif from '../component/Gif'
import RegisterForm from '../component/RegisterForm'
import GifSearchBar from '../component/GifSearchBar'
import UUID from 'uuid'
import Adapter from '../Adapter'
import {Route} from 'react-router-dom'
import LoginContainer from './LoginContainer';
const apiKey = process.env.REACT_APP_API_KEY

export default class GifContainer extends React.Component {

  state = {
    gifs: [],
    index: 0,
    term: ''
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
      .then(response=>response.json())
      .then(json=>this.setState({gifs:json.data}))
  }

  handleNext = () => {
    let index = this.state.index + 1
    if (index>24) {
      index = 0
      this.setState({index})
      return
    }
    this.setState({index})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.state.term}&limit=25&offset=0&rating=G&lang=en`)
      .then(response => response.json())
      .then(data => this.setState({ gifs: data.data }))
  }

  mapGifs = () => {
    const mappedGifs = this.state.gifs.map(gif => {
      return (
        <Gif 
          user={this.props.user} 
          key={UUID()} 
          handleClick={this.props.handleClick} 
          handleNext={this.handleNext}
          gif={gif} 
        />
      )
    })
    return mappedGifs
  }

  render() {
    return (
      <div className="gifcontainer">
        <h1><strong>Welcome {this.props.user}!</strong></h1>
        <GifSearchBar 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
        />
        <h5>Image Number {this.state.index < 26 ? this.state.index+1 : 1}</h5>
        {this.mapGifs()[this.state.index]}
        <br/>
        <br />
        <br />
        {/* <Route exact path="/register" component={LoginContainer} /> */}
      </div>
    )
  }
}