import React from 'react';

export default class Recherche extends React.Component{
render(){
  return(
    <div>
    <input type="text" placeholder={this.props.placeholder}/>
    <button>
    <span><i class="glyphicon glyphicon-search"></i></span>
    </button>
    </div>
  );
}
}
