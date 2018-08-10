import React from 'react';

import Paragraph from './Paragraph';
import Button from './Button';
import HotlineIcon from './../../icon/hotline-01.png';

export default class Contact2 extends React.Component{
    render(){
        return(
            <div className="col-sm-2 contact2">
            {this.props.children}
            <div className="row">
                <div className="col blogearphone">
                      <div><img className="icon" src={HotlineIcon}/></div>
                      <Paragraph paraphCtn="Prennez rendez-vous par l'un de nos conseillers ou téléchargez notre brochure"/>
                </div>
            </div>
            <div className="row">
                <h2>01 02 03 04 05</h2>
            </div>
            <div id="footerContact">
                 <Button className="fa fa-calendar" idButton="rendezvous" btncontent="Prendre un rendez-vous" typeButton="submit"/>
                 <Button className="fa fa-download" idButton="telecharger" btncontent="Télécharger notre brochure" typeButton="submit"/>
            </div>           
        </div>  
        );
    }
}