import React from 'react';

export default class Input extends React.Component{
  render(){
    return(
      <div className={'form-group '+ this.props.className}>
        <input placeholder={this.props.placeholder}
          className={this.props.inputform}
         />
         <span><i className={this.props.iconClass}></i></span>
      </div>
    );
  }
}
