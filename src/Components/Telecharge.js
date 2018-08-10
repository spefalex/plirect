import React from 'react';

import TelechargeBrochure from './SUBCOMPONENTS/TelechargeBrochure';
import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Offre from './SUBCOMPONENTS/Offrons';
import Decouvrir from './SUBCOMPONENTS/Decouvrir';
import Parrainer from './SUBCOMPONENTS/Parrainer';
import Contact from './SUBCOMPONENTS/Contact';
import Visio from './SUBCOMPONENTS/Visio';

export default class Telecharge extends React.Component{
    render(){
        return(
            <div>
                <Header>
                <div className="row bottomheader">
                                <div className="col-auto">
                                <h1>CONTACTEZ-NOUS</h1>
                                </div>
                                <div className="col headerMiddleBottom">
                    </div>
                    <div className="col-6" id="headerRight">
                      <Contact/>
                    </div>
                </div>
                </Header>
                <div className="row contactMargin" id="ctnblog">
                    <div className="col">
                        <Offre cntTitle="NOUS VOUS OFFRONS"/>
                        <Visio/>
                    </div>
                    <TelechargeBrochure/>
                    <div className="col">
                       <Decouvrir title="DÉCOUVRER AUSSI"/>
                       <div className="row">
                        <Parrainer/>
                        </div>
                    </div>
                    <div className="row contactBody">
                            <div className="col-sm left"></div>
                            <div className="col-auto">
                            <Contact/>
                            </div>
                            <div className="col-lg right"></div>
                            </div>
                </div>

                <Footer/>
            </div>
        );
    }
}