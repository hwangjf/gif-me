import React,{Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class Gif extends Component{
  
  render() {
    // console.log(this.props.gif.images.downsized_small.mp4)
    // console.log(this.props.gif.embed_url)
    // console.log(this.props.user)
    return (
      <div>
      {/* <h3>Welcome {this.props.user}!</h3>
        <br/>
        <h1>{this.props.gif.title}</h1>
        <embed src={this.props.gif.embed_url} />
        <br/>
        <button 
          type="button"
          onClick={(event)=>this.props.handleClick(event,this.props.gif.id)}
        >Like</button>     
        <button type="button" onClick={this.props.handleNext}>>>Next>></button> */}
          
        {/* <Card
          // image='/images/avatar/large/elliot.jpg'
          src={this.props.gif.embed_url}
          header={this.props.gif.title}
          className='centered'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          extra={extra}
        > */}
        <h1>{this.props.gif.title}</h1>
        <iframe style={{height:"300px"}}src={this.props.gif.embed_url} />
        <br />
        <button
          type="button"
          onClick={(event) => this.props.handleClick(event, this.props.gif.id)}
        >Like</button>
        <button type="button" onClick={this.props.handleNext}>>>Next>></button>
          {/* <br />
          <h1>{this.props.gif.title}</h1>
          <br />
          <button
            type="button"
            onClick={(event) => this.props.handleClick(event, this.props.gif.id)}
          >Like</button>   
          <button type="button" onClick={this.props.handleNext}>>>Next>></button> */}
        {/* </Card> */}
        </div >
    )
  }
}