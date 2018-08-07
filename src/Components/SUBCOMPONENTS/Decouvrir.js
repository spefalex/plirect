import React from 'react';


export default class Decouvrir extends React.Component{
    render(){
        return(
        <div className="row" className="offre">
          <h1>{this.props.title}</h1>
          <br></br>
          <ul>
            <li><a href="#">Pack d'essai</a></li>
            <li><a href="#"><i class="fas fa-award"></i>Pack Concours</a></li>
            <li><a href="#"><i class="fas fa-clipboard-list"></i>Pack Contrôle</a></li>
            <li><a href="#">Pack Entrainement</a></li>
            <li><a href="#"><i class="fas fa-chalkboard-teacher"></i>Pack Pour Tous</a></li>
            <li><a href="#"><i class="fas fa-award"></i>Pack Premium</a></li>
          </ul>
        </div>
        );
    }
}