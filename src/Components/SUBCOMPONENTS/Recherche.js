import React from 'react';

export default class Recherche extends React.Component{
render(){
  return(
    <input type="text" id="search" placeholder="Votre recherche ici ..."/>
    <button>
    <span><i class="glyphicon glyphicon-search"></i></span>
    </button>
  );
}
}
