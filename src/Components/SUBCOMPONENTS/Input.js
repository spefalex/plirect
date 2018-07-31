import React from 'react';

export default class Input extends React.Component{
  render(){
    return(
      <div className={'form-group '+ this.props.className}>
        <input type={this.props.typeForm} placeholder={this.props.placeholder}
          className={this.props.inputform}
         />
         <span><i className={'glyphicon glyphicon-'+this.props.iconClass+' form-control-feedback'}></i></span>
      </div>
    );
  }
}
Input.defaultProps ={
  className : 'has-feedback',
    inputform :'form-control',
      iconClass : ''

};
