import React from '../../../../../.cache/typescript/2.9/node_modules/@types/react';

export default class Liste extends React.Component{
  render(){
    return (
      <ul id={this.props.IdList} className={this.props.classListe}>
        <li >Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    );
  }
}