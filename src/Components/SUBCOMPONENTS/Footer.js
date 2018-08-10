import React from 'react';

import Glyphicon from './Glyphicon';
import Contact2 from './Contact2';
import LinkIcon from './LinkIcon';
import Youtube from './../../icon/youtube-01.png';
import Facebook from './../../icon/facebook-01.png';
import ContactIcon from './../../icon/contact-01.png';
import CalendarIcon from './../../icon/calendar-RDV-01.png';
import DownloadIcon from './../../icon/download-01.png';
import LogoPPT from './../../icon/LogoPPT_03.png';

export default class Footer extends React.Component{

  render(){
    return(
      <div className="row" id="footer"> 
              <Contact2>
                <div>
                    <img className="logoFooter" src={LogoPPT}/>
                </div>
              </Contact2>
            <div className="col">
                  <h1>Prépa pour tous</h1>
                  <ul id="line">
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Cours d'appui aux particuliers"></LinkIcon>
                    <LinkIcon link="#" className="fa fa-angle-right" linkname="Préparations PACES"></LinkIcon>
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
                        <LinkIcon link="#" linkname="Nous contacter">
                            <img className="icon" src={ContactIcon}/>
                        </LinkIcon>
                  
                  
                        <LinkIcon link="#" linkname="Prender un rendez-vous" link="#">
                            <img className="icon" src={CalendarIcon}/>
                        </LinkIcon>
                  
                
                      <LinkIcon link="#" linkname="Télécharger la brochure">
                            <img className="icon" src={DownloadIcon}/>
                      </LinkIcon>
                  </ul>
            </div>
            <div className="col">
              <h1>Suivez-nous sur les résaux sociaux</h1>
                  <ul id="sociaux">
                    <li><LinkIcon link="#">
                        <img className="icon" src={Facebook}/>
                    </LinkIcon>
                    <LinkIcon link="#">
                        <img className="icon" src={Youtube}/>
                    </LinkIcon></li>
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