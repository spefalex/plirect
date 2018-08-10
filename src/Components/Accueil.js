import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Content from './SUBCOMPONENTS/AccueilContent';
import Laptop from './../icon/laptopImage-03.png';
import GotoIcon from './../icon/go-to-01.png';
import Button from './SUBCOMPONENTS/Button';



export default class Acceuil extends React.Component{
    render(){
        return(
            <div>
                <Header>
                <div className="row bottomheader">
                                <div className="col-auto">
                                   
                                </div>
                    <div className="col-5 headerMiddleBottom">
                        <div className="bottomPosition">
                            <h1>TON PARCOURS <br></br>EN TOUTE SÉRÉNITÉ</h1>
                            <p>
                            Nous avons été, nous aussi, des étudiants en quête de réussite.<br></br>
                            Lorsque nous avons commencé nos études de médecine, nous ne savions pas comment nous y prendre ni vers qui se tourner pour nous aider à réviser... </p>
                            <Button typeButton="submit" btncontent="En savoir plus">
                                        <img className="buttonIcon" src={GotoIcon}/>
                            </Button>
                        </div>
                </div>
                <div className="col-auto" id="headerRight">
                    <img src={Laptop}/>
                </div>
                </div>     
                </Header>
                <Content/>
                <Footer/>
            </div>
        );
    }
}