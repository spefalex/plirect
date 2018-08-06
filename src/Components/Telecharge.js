import React from 'react';

import TelechargeBrochure from './SUBCOMPONENTS/TelechargeBrochure';
import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Offre from './SUBCOMPONENTS/Offre';
import Decouvrir from './SUBCOMPONENTS/Decouvrir';
import Parrainer from './SUBCOMPONENTS/Parrainer';

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
                </div>

                <Footer/>
            </div>
        );
    }
}