import React from 'react';

import CoursSoutienIcon from './../../icon/cours-soutien-01.png';
import PacesIcon from './../../icon/paces-01.png';
import BacIcon from './../../icon/bac-01.png';
import BrevetIcon from './../../icon/brevet-01.png';
export default class Offrons extends React.Component{
    render(){
        return(
        <div className="row" className="offrons">
          <h1>{this.props.cntTitle}</h1>
          <br></br>
          <ul>
            <li className="colorCours"><a href="#"><img className="iconDec" src={CoursSoutienIcon}/>Cours d'appui particulier</a></li>
            <li className="colorPaces"><a href="#"><img className="iconDec" src={PacesIcon}/>Préparation PACES</a></li>
            <li className="colorBAC"><a href="#"><img className="iconDec" src={BacIcon}/>Préparation au bac</a></li>
            <li className="colorBrevet"><a href="#"><img className="iconDec" src={BrevetIcon}/>Préparation au Brevet</a></li>
          </ul>
        </div>
        );
    }
}