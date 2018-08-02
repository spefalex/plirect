// ./src/component/App.js
import React from 'react';
import { Link } from 'react-router';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    return (
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">BookLibrary</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/inscription">
           <NavItem eventKey={1}>Inscription</NavItem>
        </LinkContainer>
        <LinkContainer to="/insert" >
           <NavItem eventKey={2}>Test</NavItem>
        </LinkContainer>
        <LinkContainer to="/users">
           <NavItem eventKey={3}>INSERT USER</NavItem>
        </LinkContainer>
      </Nav>

    </Navbar.Collapse>
  </Navbar>

 </div>
    );
  }
}
