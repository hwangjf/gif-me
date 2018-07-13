import React, { Component } from 'react';
import JumboHeader from '../component/JumboHeader'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <JumboHeader />
        {/* <h3>Welcome to Gif Me. You can have all the gifs your heart desires.</h3> */}
      </React.Fragment>
    )
  }
}