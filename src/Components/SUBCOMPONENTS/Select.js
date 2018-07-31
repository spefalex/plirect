import React from 'react';

export default class Select extends React.Component{
  render(){
    return(
      <div className={this.props.className}>
      <select className={this.props.classControl}>
        <option selected disabled>{this.props.optionTitle}</option>
           <option value="un">Un</option>
           <option value="deux">Deux</option>
           <option value="trois">Trois</option>
      </select>
      </div>
    );
  }
}

Select.defaultProps= {
  className : 'form-group',
  disabled : 'selected disabled',
  classControl : 'form-control'
};
