import React from 'react';

export default class Recherche extends React.Component{
render(){
  return(
    <div>
    <input type="text" id="search" placeholder={this.props.srplaceholder}/>
    <button>
    <span><i class="glyphicon glyphicon-search"></i></span>
    </button>
    </div>
  );
}
}
