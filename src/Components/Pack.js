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
                    <Header>
                    <div className="row bottomheader">
                                <div className="col-auto">
                                <h1>PACK PREMIUM</h1>
                                </div>
                                <div className="col headerMiddleBottom">
                                </div>
                    <div className="col-6" id="headerRight">
                      <Contact/>
                    </div>
                </div>
                    </Header>
                    <div className="row packMargin" id="ctnblog">
                    <div className="col">
                            <Offre cntTitle="NOUS VOUS OFFRONS"/>
                    </div>
                    <div className="col-7">
                            <Content/>
                    </div>
                    <div className="col">
                        <Decouvrir title="DECOUVRER AUSSI"/>
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