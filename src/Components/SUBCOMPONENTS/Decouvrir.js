import React from 'react';


export default class Decouvrir extends React.Component{
    render(){
        return(
        <div className="row" className="offre">
          <h1>DÉCOUVRIR AUSSI</h1>
          <br></br>
          <ul>
            <li><a href="#">Pack d'essai</a></li>
            <li><a href="#">Pack Concours</a></li>
            <li><a href="#">Pack Contrôle</a></li>
            <li><a href="#">Pack Entrainement</a></li>
            <li><a href="#">Pack Pour Tous</a></li>
            <li><a href="#">Pack Premium</a></li>
          </ul>
        </div>
        );
    }
}