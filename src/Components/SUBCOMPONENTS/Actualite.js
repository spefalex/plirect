import React from 'react';

import Button from './Button';
import GotoIcon from './../../icon/go-to-01.png';
import Ins from './../../icon/ins_03.png';
export default class Actualite extends React.Component{
    render(){
        return(
            <div className="row actu">
                        <div className="col-lg">
                        <h1>ACTUALITÉ</h1>
                        <div className="col">
                            <img className="sary" src={Ins}/>
                        </div>
                        <Button typeButton="submit" btncontent="En savoir plus">
                                <img className="buttonIcon" src={GotoIcon}/>
                        </Button>
                        </div>
                </div>
                
        );
    }
}