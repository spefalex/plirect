import React from 'react';

export default class Footer extends React.Component{

  render(){
    return(
      <div className="row" id="footer">
            <div className="col">

            </div>
            <div className="col">
                  <h1>Prépa pour tous</h1>
                  <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                  </ul>
            </div>
            <div className="col">
                  <h1>Liens utiles</h1>
                  <ul>
                      <li>Item1</li>
                      <li>Item2</li>
                      <li>Item3</li>
                  </ul>
            </div>
            <div className="col">

            </div>
            <div className="col">
                  <h1>Suivez-nous sur les réseaux</h1>
            </div>
      </div>
    );
  }
}
