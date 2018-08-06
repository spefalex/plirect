import React from 'react';

export default class LinkMenu extends React.Component{

  render(){
    return(
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">{this.props.menuItem}<span class="sr-only">(current)</span></a>
        </li>
      </ul>
    );
  }
}
