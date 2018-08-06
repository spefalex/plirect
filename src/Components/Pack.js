import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Content from './SUBCOMPONENTS/PackContent';
import Offre from './SUBCOMPONENTS/Offrons';
import Decouvrir from './SUBCOMPONENTS/Decouvrir';
import Contact from './SUBCOMPONENTS/Contact';

export default class Pack extends React.Component{
    render(){
        return(
            <div>
                    <Header/>
                    <div className="row" id="ctnblog">
                    <div className="col">
                            <Offre/>
                    </div>
                    <div className="col">
                            <Content/>
                    </div>
                    <div className="col">
                        <Decouvrir/>
                    </div>
                    <div className="row contactBody">
                    <div className="col-sm left"></div>
                    <div className="col-auto">
                    <Contact/>
                    </div>
                    <div className="col-lg right"></div>
                    </div>
            <div id="line"></div>
            </div>
            <Footer/>
            </div>
        );
    }
}