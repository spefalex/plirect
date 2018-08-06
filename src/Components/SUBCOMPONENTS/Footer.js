import React from 'react';

import Glyphicon from './Glyphicon';
import Contact2 from './Contact2';
import LinkIcon from './LinkIcon';

export default class Footer extends React.Component{

  render(){
    return(
      <div className="row" id="footer"> 
              <Contact2/>
            <div className="col">
                  <h1>Prépa pour tous</h1>
                  <ul id="line">
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Cours d'appui aux particuliers"/>
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Préparations PACES"/>
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Préparation en BAC"/>
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Préparation BREVET"/>
                  </ul>
                  <ul id="faq">
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="À propos de nous"/>
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="FAQ"/>
                  </ul>
            </div>
            <div className="col">
                  <h1>Liens utiles</h1>
                  <ul id="line">
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Notre méthode"/>
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Nos packs"/>
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Actualité"/>
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Parrainer une personne"/>
                  </ul>
                  <ul id="plan">
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Plan du site"/>
                  <LinkIcon link="#" className="fa fa-angle-right" linkname="Mention légale"/>
                  </ul>
            </div>
            <div className="col-auto">
                  <ul id="trois">
                        <LinkIcon className="glyphicon glyphicon-envelope" link="#" linkname="Nous contacter"/>
                  
                  
                        <LinkIcon className="glyphicon glyphicon-calendar" link="#" linkname="Prender un rendez-vous" link="#"/>
                  
                
                      <LinkIcon className="glyphicon glyphicon-download" link="#" linkname="Télécharger la brochure"/>
                
                  </ul>
            </div>
            <div className="col">
              <h2>Suivez-nous sur les résaux sociaux</h2>
                  <ul id="sociaux">
                    <li><LinkIcon link="#" className="fa fa-facebook"/><LinkIcon link="#" className="fa fa-youtube"/></li>
                    </ul>
                    <ul id="condition">
                    <li>Condition générales de vente</li>
                    <li>Condition générales d'utilisation</li>
                    <li>Charte de confidentialité</li>
                    </ul>
                    <ul>
                    <li id="copyright"> &#169; Copyright Prépa Pour Tous</li>
                    </ul>
            </div>
      </div>
    );
  }
}