import React from 'react';

import Glyphicon from './Glyphicon';
import Recherche from './Recherche';
import LinkMenu from './LinkMenu';
import Button from './Button';
import Paragraph from './Paragraph';
import Contact from './Contact';
import LinkIcon from './LinkIcon';

export default class Header extends React.Component{
  render(){
    return(
      <div class="row" id="header">
        <div className="row">
        <div className="col-sm-auto">
       <h2>PREPA POUR</h2><h1>TOUS</h1>
       </div>
       <div className="col">
       <nav className="navbar">
       <div class="row" id="search">
           <Recherche id="search" placeholder="Votre recherche ici..." />
     	</div>
       <div class="collapse navbar-collapse" id="navbar">
        <LinkMenu menuItem="A PROPOS"/>
        <LinkMenu menuItem="PREPA ET APPUI"/>
        <LinkMenu menuItem="METHODE"/>
        <LinkMenu menuItem="NOS PACKS"/>
        <LinkMenu menuItem="ACTUALITES"/>
        <LinkMenu menuItem="CONTACT"/>
       </div>
       </nav>
       </div>
       <div className="col" id="headerRight">
          <div className="row"  id="espace">
            <LinkIcon className="glyphicon glyphicon-log-in" link="#" linkname="ESPACE ÉTUDIANT"/>
            <LinkIcon className="glyphicon glyphicon-user" link="#" linkname="ESPACE PARENT"/>
            <LinkIcon className="glyphicon glyphicon-tasks" link="inscription" linkname="S'INSCRIRE"/>
          </div>
          <Contact/>
       </div>
       </div>
     </div>
);
  }
}