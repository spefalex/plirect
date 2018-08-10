import React from 'react';

import Recherche from './Recherche';
import Contact from './Contact';
import LinkIcon from './LinkIcon';
import Menu from './Menu';
import ParentIcon from './../../icon/parent-login-01.png';
import EtudiantIcon from './../../icon/login-01.png';
import InscriptionIcon from './../../icon/inscription-01.png';
import PPTLogo from './../../icon/LogoPPT_03.png';

export default class Header extends React.Component{
  render(){
    return(
      <div class="row" id="header">
        <div className="row topheader">
        <div className="col-3">
        <img className="logo" src={PPTLogo} />
        </div>
            <Menu/>
        <div className="col" id="espace">
            <LinkIcon img={EtudiantIcon} link="/" linkname="ESPACE ÉTUDIANT">
                    <img className="icon" src={EtudiantIcon}/>
            </LinkIcon>
            <LinkIcon link="/" linkname="ESPACE PARENT">
                    <img className="icon" src={ParentIcon} />
            </LinkIcon>
            <LinkIcon link="inscription" linkname="S'INSCRIRE">
                    <img className="icon" src={InscriptionIcon} />
            </LinkIcon>
        </div>
        </div>
          {this.props.children}
       </div>
     
);
  }
}