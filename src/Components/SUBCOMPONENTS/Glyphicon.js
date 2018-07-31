import React from 'react';

export default class Glyphicon extends React.Component{

    render(){
      return (
        <div className="col">
        <span className={this.props.className}></span>
        <a href={this.props.link}>{this.props.linkname}</a>
        </div>

      );
    }

}
