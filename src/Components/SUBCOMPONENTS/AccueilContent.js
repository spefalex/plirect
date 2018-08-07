import React from 'react';

import Button from './Button';
import Offre from './Offrons';
import Decouvrir from './Decouvrir';
import Contact from './Contact';
import Visio from './Visio';
import Parrainer from './Parrainer';
import Actualite from './Actualite';

export default class AccueilContent extends React.Component{
    render(){
        return(
            <div className="row" id="ctnblog">
            <div className="row">
            <div className="col">
                <Offre cntTitle="Nous vous offrons"/>
                <Visio/>
            </div>
            <div className="col-lg-6">
                <h1>PRÉPA POUR TOUS C'EST AUSSI</h1>
                <div className="row">
                <div className="col  aussi"><i class="far fa-clock"></i><span>Une équipe d'intervenant de qualité</span></div>
                <div className="col  aussi"><i class="far fa-clock"></i><span>Gestion de temps optimisé grace à une plateforme intelligente</span></div>
                <div className="col  aussi"><i class="far fa-clock"></i><span>Suivi personnalisé et un espace parentale dédié pour suivre l'évolution des élèves</span></div>
                </div>
                <Parrainer/>
            </div>
            <div className="col">
               <Decouvrir title="DECOUVRER NOS PACKS"/>
               <div className="row">
               <Actualite/>
                </div>
            </div>
            <div className="row contactBody">
                    <div className="col-sm left"></div>
                    <div className="col-auto">
                    <Contact/>
                    </div>
                    <div className="col-lg right"></div>
                    </div>
            </div>
            <div className="row stat">
            <div className="row">
                <div className="col">
                    <span>515</span><span>Heures de cours données par semaine</span>
                </div>
                <div className="col">
                    <span>95%</span><span>Taux de réussite de nos élèves</span>
                </div>   
            </div>
            <div className="row">
                <div className="col">
                    logo
                </div>
                <div className="col">
                <p>
                Nous avons été, nous aussi, des étudiants en quête de réussite.<br></br>
                    Lorsque nous avons commencé nos études de médecine, nous ne savions pas comment nous y prendre ni vers qui se tourner pour nous aider à réviser... <br></br> 
                </p>
                <Button/>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>TÉMOIGNAGE</h1>
                    Des ancies élèves et étudiants ainsi que des parents témoignent
                </div>
                <div className="col">
                left flèche
                </div>
                <div className="col">
                    <div className="photo">
                    </div>
                    <div className="témoignage">
                        <h1>MARIE LAURE BOULAY</h1>
                        <h6>Étudiant en médecine</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="photo">
        
                    </div>
                    <div className="témoignage">
                        <h1>MICHEL GRAVILLON</h1>
                        <h6>Parent d'élève</h6>
                    </div>
                </div>
                <div className="col">
                    right flèche 
                </div>
            </div>
        </div>
        );
    }
}