import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import ContentApropos from './SUBCOMPONENTS/ContentApropos';
import Laptop from './../icon/laptopImage-03.png';
import Contact from './SUBCOMPONENTS/Contact';

export default class Apropos extends React.Component{
    render(){
        return(
            <div>
                <Header >
                <div className="row bottomheader">
                                <div className="col-auto">
                                <h1>Qui sommes nous?</h1>
                                </div>
                                <div className="col headerMiddleBottom">
                    </div>
                    <div className="col-5" id="headerRight">
                    <img src={Laptop}/>
                    </div>
                </div>     
                </Header>
                <div className="row aproposMargin" id="ctnblog">
                    <ContentApropos/>
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