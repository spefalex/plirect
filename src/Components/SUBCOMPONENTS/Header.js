import React from 'react';

import Glyphicon from './Glyphicon';
import Recherche from './Recherche';
import LinkMenu from './LinkMenu';
import Button from './Button';
import Paragraph from './Paragraph';

export default class Header extends React.Component{
  render(){
    return(
      <div class="row" id="header">
        <div className="row">
        <div className="col-sm">
       <h2>PREPA POUR</h2><h1>TOUS</h1>
       </div>
       <div className="col">
       <nav className="navbar">
       <div class="row">
           <Recherche srplaceholder="Votre recherche ici..." />
     	</div>
       <div class="collapse navbar-collapse" id="navbarNav">
        <LinkMenu menuItem="A PROPOS"/>
        <LinkMenu menuItem="PREPA ET APPUI"/>
        <LinkMenu menuItem="METHODE"/>
        <LinkMenu menuItem="NOS PACKS"/>
        <LinkMenu menuItem="ACTUALITES"/>
        <LinkMenu menuItem="CONTACT"/>
       </div>
       </nav>
       </div>
       <div className="col">
          <div className="row"  id="espace">
            <Glyphicon className="glyphicon glyphicon-log-in" link="#" linkname="Espace parent"/>
            <Glyphicon className="glyphicon glyphicon-user" link="#" linkname="Espace parent"/>
            <Glyphicon className="glyphicon glyphicon-libraries" link="#" linkname="S'inscrire"/>
          </div>
          <div className="row">
              <div className="col">
                  <div className="row" id="conseil">
                      <div className="col-sm-2 blogearphone">
                      <div className="glyphicon glyphicon-earphone"></div>
                      </div>
                      <div className="col">
                          <p>Contactez nos conseiller</p>
                          <h2>01 02 03 04 05</h2>
                      </div>
                  </div>
                  <div className="row">
                    <Button className="primary fa fa-calendar" idButton="rendezvous" btncontent="Prendre rendez-vous" typeButton="submit"/>
                  </div>
              </div>
              <div className="col">
                  <div className="row">
                    <Paragraph paraphCtn="Pour toutes informations supplémentaires concernant nos formations n'hésiter pas"/>
                  </div>
                  <div className="row">
                  <Button className="primary fa fa-download" idButton="rendezvous" btncontent="Télécharger notre brochure" typeButton="submit"/>
                  </div>
              </div>
          </div>
       </div>
       </div>
     </div>
    );
  }
}
