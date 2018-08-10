import React from 'react';

import Button from './Button';
import Offre from './Offrons';
import Decouvrir from './Decouvrir';
import Contact from './Contact';
import Visio from './Visio';
import Parrainer from './Parrainer';
import Actualite from './Actualite';
import IntervenantIcon from './../../icon/intervenant-01.png';
import SuiviIcon from './../../icon/suivi-01.png';
import TempsIcon from './../../icon/gestion-temps-01.png';
import LogoPPT from './../../icon/LogoPPT_03.png';
import Etudiante from './../../icon/slicehome-07.png';
import Parent from './../../icon/slicehome-09.png';
import GoTo from './../../icon/go-to-01.png';
import LinkIcon from './LinkIcon';

export default class AccueilContent extends React.Component{
    render(){
        return(
            <div className="row" id="ctnblog">
            <div className="row ctnPart1">
            <div className="col">
                <Offre cntTitle="Nous vous offrons"/>
                <Visio/>
            </div>
            <div className="col-lg-6">
                <h1>PRÉPA POUR TOUS C'EST AUSSI</h1>
                <div className="row">
                <div className="col  aussi"><img className="icon" src={IntervenantIcon}/><span>Une équipe d'intervenant de qualité</span></div>
                <div className="col  aussi"><img className="icon" src={TempsIcon}/><span>Gestion de temps optimisé grace à une plateforme intelligente</span></div>
                <div className="col  aussi"><img className="icon" src={SuiviIcon}/><span>Suivi personnalisé et un espace parentale dédié pour suivre l'évolution des élèves</span></div>
                </div>
                <Parrainer/>
            </div>
            <div className="col">

               <Decouvrir title="DECOUVRER NOS PACKS"/>
               <Actualite/>
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
                <div className="col alignHP">
                    <span className="heurePourc">515</span><span>Heures de cours données par semaine</span>
                </div>
                <div className="col alignHP">
                    <span className="heurePourc">95%</span><span>Taux de réussite de nos élèves</span>
                </div>   
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img className="logoTaux" src={LogoPPT}/>
                </div>
                <div className="col">
                <p>
                Nous avons été, nous aussi, des étudiants en quête de réussite.<br></br>
                    Lorsque nous avons commencé nos études de médecine, nous ne savions pas comment nous y prendre ni vers qui se tourner pour nous aider à réviser... <br></br> 
                </p>
                <Button typeButton="submit" btncontent="En savoir plus">
                        <img className="buttonIcon" src={GoTo}/>
                </Button>
                </div>
            </div>
            </div>
            <div className="row temoin">
                <div className="col-auto">
                    <h1>TÉMOIGNAGE</h1>
                    Des anciens élèves et étudiants <br></br> ainsi que des parents témoignent
                </div>
                <div className="col-auto">
                    <LinkIcon link="#" className="fa fa-angle-left"/>
                </div>
                <div className="col-4 photoPersonne">
                    <div className="photo">
                            <img src={Etudiante}/>
                    </div>
                    <div className="témoignage">
                        <h1>MARIE LAURE BOULAY</h1>
                        <h6>Étudiant en médecine</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-4 photoPersonne">
                    <div className="photo">
                            <img src={Parent}/>
                    </div>
                    <div className="témoignage">
                        <h1>MICHEL GRAVILLON</h1>
                        <h6>Parent d'élève</h6>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-auto">
                <LinkIcon link="#" className="fa fa-angle-right"/>
                </div>
            </div>
            <div className="row ligne">
                <hr></hr>
            </div>
        </div>
        );
    }
}