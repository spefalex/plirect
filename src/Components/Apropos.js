import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import ContentApropos from './SUBCOMPONENTS/ContentApropos';
import Contact from './SUBCOMPONENTS/Contact';

export default class Apropos extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="row" id="ctnblog">
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