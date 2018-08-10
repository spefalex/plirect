import React from 'react';

import Button from './Button';
import Paragraph from './Paragraph';
import BrochureIcon from './../../icon/brochure-01.png';
import HotlineIcon from './../../icon/hotline-01.png';

export default class Contact extends React.Component   {

    render(){
        return(
            <div className="row contact">
            <div className="col">
                <div className="row" id="conseil">
                    <div className="col-sm-3 blogearphone">
                      <div className="glyphicon"><img className="icon" src={HotlineIcon}/></div>
                    </div>
                    <div className="col">
                        <p>Contactez nos conseiller</p>
                        <h2>01 02 03 04 05</h2>
                    </div>
                </div>
                <div className="row">
                  <Button className="fa fa-calendar" idButton="rendezvous" btncontent="Prendre rendez-vous" typeButton="submit"/>
                </div>
            </div>
            <div className="col">
                <div className="row" id="align">
                <div className="col-sm-3 blogearphone">
                <div className="glyphicon"><img className="icon" src={BrochureIcon}/></div>
                </div>
                <div className="col">
                  <Paragraph paraphCtn="Pour toutes informations supplémentaires concernant nos formations n'hésiter pas"/>
                </div>
                </div>
                <div className="row">
                <Button redirect="/Telecharge" className="fa fa-download" idButton="telecharger" btncontent="Télécharger notre brochure" typeButton="submit"/>
                </div>
            </div>
        </div>
        );
    }
}