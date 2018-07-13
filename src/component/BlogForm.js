import React, {Component} from 'react';

export default class BlogForm extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    const config = {
      method:'POST',
      body:JSON.stringify(this.state),
      headers:{
        "content-type":"application/json"
      }
    }
    fetch('http://localhost:3000/api/v1/posts',config)
      .then(response=>response.json())
      .then(console.log)
    this.setState({
      title: '',
      content: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>Title: </label>
        <input 
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <label>Content: </label>
        <textarea 
          type="textarea"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}