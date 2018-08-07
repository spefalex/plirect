import React from 'react';

import Header from './SUBCOMPONENTS/Header';
import Footer from './SUBCOMPONENTS/Footer';
import Content from './SUBCOMPONENTS/AccueilContent';


export default class Acceuil extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}