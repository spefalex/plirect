import React from 'react';


export default class Offrons extends React.Component{
    render(){
        return(
        <div className="row" className="offrons">
          <h1>{this.props.cntTitle}</h1>
          <br></br>
          <ul>
            <li className="colorCours"><a href="#"><i class="fas fa-award"></i>Cours d'appui particulier</a></li>
            <li className="colorPaces"><a href="#"><i class="fas fa-stethoscope"></i>Préparation PACES</a></li>
            <li className="colorBAC"><a href="#"> <i class="far fa-address-card"></i> Préparation au bac</a></li>
            <li className="colorBrevet"><a href="#"><i class="far fa-address-book"></i>Préparation au Brevet</a></li>
          </ul>
        </div>
        );
    }
}