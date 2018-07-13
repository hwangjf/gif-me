import React, { Component } from 'react';

export default class BlogContainer extends Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/posts')
    .then(results=>results.json())
    .then(console.log)
  }

  render() {
    return(
      <React.Fragment>
        <h1>Blog Title</h1>
      </React.Fragment>
    )
  }
}