import React from 'react';

import Liste from './Liste';

export default class ContentBlog extends React.Component{
  render(){
    return (
      <div className="row" id={this.props.cntID}>
          <h1>{this.props.cntTitle}</h1>
          <br></br>
          <Liste/>
      </div>
    );
  }
}