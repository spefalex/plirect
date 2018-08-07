import React from 'react';

import Button from './Button';

export default class Visio extends React.Component{
    render(){
        return(
            <div className="row" className="offre">
                <h1>NOTRE PLATEFORME DE VISIO CONFERENCE</h1>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="row">
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        </div>
                        <div className="row">
                        <Button typeButton="submit" className="glyphicon glyphicon-arrow-right" btncontent="Découvrir"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}