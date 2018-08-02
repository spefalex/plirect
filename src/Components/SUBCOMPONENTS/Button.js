import React from 'react';

export default class Button extends React.Component{

  render(){
    return(
        <button id={this.props.idButton} type={this.props.typeButton} data-toggle="button" aria-pressed="false"  autocomplete="off" className={'btn btn-'+this.props.className}>{this.props.btncontent}</button>
    );
  }
}
