import React from 'react';

import Button from './Button';
import Phone from './../../icon/phoneImage-03.png';
import GotoIcon from './../../icon/go-to-01.png';

export default class Parrainer extends React.Component{
    render(){
        return(
            <div className="row parrainer">
            <div className="col-7">
            <h1>PARRAINER C'EST GAGNER</h1>
            <p>
                    Chez Prépa Pour Tous, nous privilégions toujours le partage. Chaque parraignage c'est un iPad mini offert! Curabitur ut leo sed felis congue venenatis et pretium odio. In hac habitasse platea dictumst. In nec hendrerit esorin hac habitasse platea dictumst. In henderit eros  
                </p>
                <Button typeButton="submit" btncontent="Toutes nos actualités">
                    <img className="buttonIcon" src={GotoIcon}/>
                </Button>
            </div>
            <div className="col-1 gagner">
                <div>
                    <img src={Phone}/>
                </div>
            </div>
           

        </div>
        );
    }
}