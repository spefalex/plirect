import React from 'react';

import Button from './Button';

export default class Parrainer extends React.Component{
    render(){
        return(
            <div className="row parrainer">
          <h1>PARRAINER C'EST GAGNER</h1>
            <div className="col gagner">
                <p>
                    Chez Prépa Pour Tous, nous privilégions toujours le partage. Chaque parraignage c'est un iPad mini offert! Curabitur ut leo sed felis congue venenatis et pretium odio. In hac habitasse platea dictumst. In nec hendrerit esorin hac habitasse platea dictumst. In henderit eros  
                </p>
            </div>
            <div className="col">
            <Button typeButton="submit" className="glyphicon glyphicon-arrow-right" btncontent="Toutes nos actualités"/>
            </div>

        </div>
        );
    }
}