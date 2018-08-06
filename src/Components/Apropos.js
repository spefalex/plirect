import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import ContentApropos from './SUBCOMPONENTS/ContentApropos';

export default class Offre extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="row" id="ctnblog">
                    <ContentApropos/>
                </div>
                <Footer/>
            </div>
        );
    }
}