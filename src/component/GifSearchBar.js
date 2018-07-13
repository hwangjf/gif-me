import React, { Component } from 'react';

export default class GifSearchBar extends Component {

  render() {
    // console.log(this.props.gif.images.downsized_small.mp4)
    // console.log(this.props.gif.embed_url)
    // console.log(this.props.user)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} >
        <label>Gif Search Bar</label>
          <input 
            name="term"
            type="text" 
            value={this.props.gifSearchTerm} 
            onChange={this.props.handleChange} 
          />
          <button type="submit">Search</button>
        </form>
        <h3>Browse Trending Gifs Below!</h3>
      </div>
    )
  }
}