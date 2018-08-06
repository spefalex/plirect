import React from 'react';

export default class Button extends React.Component{

  render(){
    return(
        <button type={this.props.typeButton} data-toggle="button" aria-pressed="false"  autocomplete="off"><span className={this.props.className+' '+this.props.idButton}></span><span>{this.props.btncontent}</span></button>
    );
  }
}
