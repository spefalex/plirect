import React from 'react';

import Button from './Button';
import VisioIcon from './../../icon/slice-10.png';
import GotoIcon from './../../icon/go-to-01.png';


export default class Visio extends React.Component{
    render(){
        return(
            <div className="row" className="visio">
                <h1>NOTRE PLATEFORME DE VISIO CONFERENCE</h1>
                <div className="row">
                    <div className="col-sm-5">
                        <img className="visioIcon" src={VisioIcon}/>
                    </div>
                    <div className="col">
                        <div className="row">
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have.
                        </p>
                        </div>
                        <div className="row">
                        <Button typeButton="submit" btncontent="Découvrir">
                            <img className="buttonIcon" src={GotoIcon}/>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}