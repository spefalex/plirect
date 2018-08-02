import React from 'react';

export default class Checkbox extends React.Component{
  render(){
    return (
      <div class="checkbox  bolo">
            <input type="checkbox" class="form-check-input" id={this.props.checkID} value=""/>
            <label id="labcheck" className="checkbox inline" for={this.props.checkID}>
            {this.props.children}
            </label>
        </div>
    );
  }
}
