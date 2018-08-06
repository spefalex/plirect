import React from 'react';

import TelechargeBrochure from './SUBCOMPONENTS/TelechargeBrochure';
import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Offre from './SUBCOMPONENTS/Offrons';
import Decouvrir from './SUBCOMPONENTS/Decouvrir';
import Parrainer from './SUBCOMPONENTS/Parrainer';
import Contact from './SUBCOMPONENTS/Contact';

export default class Telecharge extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="row" id="ctnblog">
                    <div className="col">
                        <Offre/>
                    </div>
                    <TelechargeBrochure/>
                    <div className="col">
                       <Decouvrir/>
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