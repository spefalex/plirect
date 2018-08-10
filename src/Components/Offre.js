import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Offrons from './SUBCOMPONENTS/Offrons';
import ContentOffre from './SUBCOMPONENTS/ContentOffre';
import Parrainer from './SUBCOMPONENTS/Parrainer';
import Contact from './SUBCOMPONENTS/Contact';

export default class Offre extends React.Component{
    render(){
        return(
           <div>
               <Header>
               <div className="row bottomheader">
                                <div className="col-auto">
                                <h1>COURS D'APPUI PARTICULIER</h1>
                                </div>
                                <div className="col headerMiddleBottom">
                    </div>
                    <div className="col-6" id="headerRight">
                      <Contact/>
                    </div>
                </div>
               </Header>
               <div className="row" id="ctnblog">
                    <div className="col">
                        <Offrons/>
                    </div>  
                    <div className="col-lg-8">  
                        <ContentOffre/>
                    </div>
                    <div className="col">
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