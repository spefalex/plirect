import React from 'react';

import LinkMenu from './LinkMenu';
import Recherche from './Recherche';

export default class Menu extends React.Component{
    render(){
        return(
            <nav className="navbar">
            <div class="row" id="search">
                <Recherche id="search" placeholder="Votre recherche ici..." />
                </div>
            <div class="collapse navbar-collapse" id="navbar">
            <LinkMenu routeLink="Apropos"  menuItem="A PROPOS"/>
            <LinkMenu menuItem="PREPA ET APPUI"/>
            <LinkMenu menuItem="METHODE"/>
            <LinkMenu routeLink="Pack" menuItem="NOS PACKS"/>
            <LinkMenu routeLink="blog" menuItem="ACTUALITES"/>
            <LinkMenu routeLink="Contact" menuItem="CONTACT"/>
           </div>
           </nav>
        );
    }
}