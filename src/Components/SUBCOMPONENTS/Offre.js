import React from 'react';


export default class Offre extends React.Component{
    render(){
        return(
        <div className="row" className="offre">
          <h1>Nous vous offrons</h1>
          <br></br>
          <ul>
            <li><a href="#">Cours d'appui particulier</a></li>
            <li><a href="#">Préparation PACES</a></li>
            <li><a href="#">Préparation au bac</a></li>
            <li><a href="#">Préparation au Brevet</a></li>
          </ul>
        </div>
        );
    }
}