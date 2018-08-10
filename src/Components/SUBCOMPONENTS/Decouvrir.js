import React from 'react';

import EssaiIcon from './../../icon/pack-essai-01.png';
import ConcoursIcon from './../../icon/pack-concours-01.png';
import ControleIcon from './../../icon/pack-controle-01-01.png';
import EntrainementIcon from './../../icon/pack-entrainement-01.png';
import PourTousIcon from './../../icon/pack-pour-tous-01.png';
import PremiumIcon from './../../icon/pack-premium-01.png';
export default class Decouvrir extends React.Component{
    render(){
        return(
        <div className="row" className="offre">
          <h1>{this.props.title}</h1>
          <br></br>
          <ul>
            <li><a href="#"><img className="iconDec" src={EssaiIcon}/>Pack d'essai</a></li>
            <li><a href="#"><img className="iconDec" src={ConcoursIcon}/>Pack Concours</a></li>
            <li><a href="#"><img className="iconDec" src={ControleIcon}/>Pack Contrôle</a></li>
            <li><a href="#"><img className="iconDec" src={EntrainementIcon}/>Pack Entrainement</a></li>
            <li><a href="#"><img className="iconDec" src={PourTousIcon}/>Pack Pour Tous</a></li>
            <li><a href="#"><img className="iconDec" src={PremiumIcon}/>Pack Premium</a></li>
          </ul>
        </div>
        );
    }
}