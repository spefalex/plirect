import React from 'react';

import Button from './Button';

export default class TelechargeBrochure extends React.Component{
    render(){
        return(
            <div className="col-lg-5 group">
            <form>
            <h1>TÉLÉCHARGER NOTRE BROCHURE</h1>
            <div className="form-groud">
            <label for="nomDown">Nom* </label>
            <input id="nomDown" type="text"/>
            </div>
            <div className="form-group">
            <label for="prenomDown">Prénom(s)*</label>
            <input type="text" id="prenomDown"/>
            </div>
            <div className="form-group">
            <label for="emailDown">email*</label>
            <input type="text" id="emailDown"/>
            </div>
            <div className="form-group">
            <label>sujet</label>
            <input type="text" id="sujet"/>
            </div>
            <div className="form-group">
            <label for="message">Votre message</label>
            <textarea id="message"/>
            </div>
            <Button typeButton="submit" className="fas fa-paper-plane" btncontent="Envoyer"/>
            </form>
            </div>    
        );
    }
}