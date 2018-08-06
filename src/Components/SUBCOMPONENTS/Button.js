import React from 'react';

import {withRouter} from 'react-router-dom';

export default class Button extends React.Component{
    
  
  nextPath(path) {
        this.props.history.push(path);
      }
  render(){
    return(
        <button onClick={() => this.nextPath('/Telecharge') } type={this.props.typeButton} data-toggle="button" aria-pressed="false"  autocomplete="off"><span className={this.props.className+' '+this.props.idButton}></span><span>{this.props.btncontent}</span></button>
    );
  }
}
